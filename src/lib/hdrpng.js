/* hdrpng.js - by Enki - https://enkimute.github.io */
!(function (e, t, r) {
  'undefined' != typeof module && module.exports
    ? (module.exports = r())
    : 'function' == typeof define && define.amd
    ? define(e, r)
    : (t[e] = r())
})('HDRImage', this, function () {
  function t() {
    var e,
      t,
      r = document.createElement('canvas'),
      u = 't',
      d = 1,
      l = 2.2,
      s = null
    return (
      r.__defineGetter__('exposure', function () {
        return d
      }),
      r.__defineSetter__('exposure', function (r) {
        ;(d = r), s && (f(s, d, l, t.data), e.putImageData(t, 0, 0))
      }),
      r.__defineGetter__('gamma', function () {
        return l
      }),
      r.__defineSetter__('gamma', function (r) {
        ;(l = r), s && (f(s, d, l, t.data), e.putImageData(t, 0, 0))
      }),
      r.__defineGetter__('dataFloat', function () {
        return h(s)
      }),
      r.__defineGetter__('dataRGBE', function () {
        return s
      }),
      (r.toHDRBlob = function (e, t) {
        function r(e, t, r) {
          var a = e.createShader(r)
          return e.shaderSource(a, t), e.compileShader(a), a
        }
        function a(e, t, a) {
          var n,
            i,
            o = e.createProgram()
          return (
            e.attachShader(o, (n = r(e, t, e.VERTEX_SHADER))),
            e.attachShader(o, (i = r(e, a, e.FRAGMENT_SHADER))),
            e.linkProgram(o),
            e.deleteShader(n),
            e.deleteShader(i),
            o
          )
        }
        var i = new Uint8Array(
            t && t.match(/rgb9_e5/i) ? n(h(s)).buffer : s.buffer,
          ),
          o =
            'precision highp float;\nattribute vec3 position;\nvarying vec2 tex;\nvoid main() { tex = position.xy/2.0+0.5; gl_Position = vec4(position, 1.0); }',
          f =
            'precision highp float;\nprecision highp sampler2D;\nuniform sampler2D tx;\nvarying vec2 tex;\nvoid main() { gl_FragColor = texture2D(tx,tex); }',
          u = this.width,
          d = this.height
        if (u * d * 4 < i.byteLength) return console.error('not big enough.')
        var l = document.createElement('canvas')
        ;(l.width = u), (l.height = d)
        var c = l.getContext('webgl', {
            antialias: !1,
            alpha: !0,
            premultipliedAlpha: !1,
            preserveDrawingBuffer: !0,
          }),
          g = c.createTexture()
        c.activeTexture(c.TEXTURE0),
          c.bindTexture(c.TEXTURE_2D, g),
          c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0),
          c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST),
          c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST),
          c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE),
          c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE),
          c.texImage2D(
            c.TEXTURE_2D,
            0,
            c.RGBA,
            u,
            d,
            0,
            c.RGBA,
            c.UNSIGNED_BYTE,
            new Uint8Array(i.buffer),
          )
        var E = a(c, o, f),
          T = c.getUniformLocation(E, 'tx'),
          _ = new Float32Array([
            -1, -1, 0, 1, -1, 0, 1, 1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0,
          ]),
          m = c.createBuffer()
        return (
          c.enableVertexAttribArray(0),
          c.bindBuffer(c.ARRAY_BUFFER, m),
          c.bufferData(c.ARRAY_BUFFER, _, c.STATIC_DRAW),
          c.vertexAttribPointer(0, 3, c.FLOAT, !1, 0, 0),
          c.useProgram(E),
          c.uniform1i(T, 0),
          c.drawArrays(c.TRIANGLES, 0, 6),
          c.deleteTexture(g),
          c.deleteProgram(E),
          e ? l.toBlob(e) : void 0
        )
      }),
      r.__defineGetter__('src', function () {
        return u
      }),
      r.__defineSetter__('src', function (n) {
        if (
          ((u = n),
          e && e.clearRect(0, 0, this.width, this.height),
          n.match(/\.hdr$/i))
        )
          a(
            n,
            function (r, a, n) {
              ;(s = r),
                (this.width = this.style.width = a),
                (this.height = this.style.height = n),
                (e = this.getContext('2d')),
                (t = e.getImageData(0, 0, a, n)),
                f(r, d, l, t.data),
                e.putImageData(t, 0, 0),
                this.onload && this.onload()
            }.bind(r),
          )
        else if (n.match(/\.rgb9_e5\.png$/i)) {
          var h = new Image()
          ;(h.src = n),
            (h.onload = function () {
              var r = document.createElement('canvas'),
                a = (this.width = this.style.width = r.width = h.width),
                n = (this.height = this.style.height = r.height = h.height),
                u = r.getContext('webgl'),
                c = u.createTexture()
              u.bindTexture(u.TEXTURE_2D, c),
                u.texImage2D(
                  u.TEXTURE_2D,
                  0,
                  u.RGBA,
                  u.RGBA,
                  u.UNSIGNED_BYTE,
                  h,
                ),
                (fb = u.createFramebuffer()),
                u.bindFramebuffer(u.FRAMEBUFFER, fb),
                u.framebufferTexture2D(
                  u.FRAMEBUFFER,
                  u.COLOR_ATTACHMENT0,
                  u.TEXTURE_2D,
                  c,
                  0,
                )
              var g = new Uint8Array(a * n * 4)
              u.readPixels(0, 0, a, n, u.RGBA, u.UNSIGNED_BYTE, g),
                u.deleteTexture(c),
                u.deleteFramebuffer(fb),
                (this.dataRAW = new Uint32Array(g.buffer)),
                (s = o(i(this.dataRAW))),
                (e = this.getContext('2d')),
                (t = e.getImageData(0, 0, a, n)),
                f(s, d, l, t.data),
                e.putImageData(t, 0, 0),
                this.onload && this.onload()
            }.bind(r))
        } else if (n.match(/\.hdr\.png$|\.rgbe\.png/i)) {
          var h = new Image()
          ;(h.src = n),
            (h.onload = function () {
              var r = document.createElement('canvas'),
                a = (this.width = this.style.width = r.width = h.width),
                n = (this.height = this.style.height = r.height = h.height),
                i = r.getContext('webgl'),
                o = i.createTexture()
              i.bindTexture(i.TEXTURE_2D, o),
                i.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  i.RGBA,
                  i.RGBA,
                  i.UNSIGNED_BYTE,
                  h,
                ),
                (fb = i.createFramebuffer()),
                i.bindFramebuffer(i.FRAMEBUFFER, fb),
                i.framebufferTexture2D(
                  i.FRAMEBUFFER,
                  i.COLOR_ATTACHMENT0,
                  i.TEXTURE_2D,
                  o,
                  0,
                )
              var u = new Uint8Array(a * n * 4)
              i.readPixels(0, 0, a, n, i.RGBA, i.UNSIGNED_BYTE, u),
                i.deleteTexture(o),
                i.deleteFramebuffer(fb),
                (s = u),
                (e = this.getContext('2d')),
                (t = e.getImageData(0, 0, a, n)),
                f(s, d, l, t.data),
                e.putImageData(t, 0, 0),
                this.onload && this.onload()
            }.bind(r))
        }
      }),
      r
    )
  }
  function r(e, t) {
    for (var r in t) e[r] = t[r]
    return e
  }
  function a(e, t) {
    var a = r(new XMLHttpRequest(), { responseType: 'arraybuffer' })
    return (
      (a.onerror = t.bind(a, !1)),
      (a.onload = function () {
        if (this.status >= 400) return this.onerror()
        for (
          var e, r = '', a = 0, n = new Uint8Array(this.response);
          !r.match(/\n\n[^\n]+\n/g);

        )
          r += String.fromCharCode(n[a++])
        if (((e = r.match(/FORMAT=(.*)$/m)[1]), '32-bit_rle_rgbe' != e))
          return console.warn('unknown format : ' + e), this.onerror()
        for (
          var i = r.split(/\n/).reverse()[1].split(' '),
            o = 1 * i[3],
            h = 1 * i[1],
            f = new Uint8Array(o * h * 4),
            u = 0,
            d = 0;
          h > d;
          d++
        ) {
          var l = n.slice(a, (a += 4)),
            s = []
          if (2 != l[0] || 2 != l[1] || 128 & l[2])
            return console.warn('HDR parse error ..'), this.onerror()
          if ((l[2] << 8) + l[3] != o)
            return console.warn('HDR line mismatch ..'), this.onerror()
          for (var c = 0; 4 > c; c++)
            for (var g, E, T = c * o, _ = (c + 1) * o; _ > T; )
              if (((g = n.slice(a, (a += 2))), g[0] > 128))
                for (E = g[0] - 128; E-- > 0; ) s[T++] = g[1]
              else for (E = g[0] - 1, s[T++] = g[1]; E-- > 0; ) s[T++] = n[a++]
          for (var c = 0; o > c; c++)
            (f[u++] = s[c]),
              (f[u++] = s[c + o]),
              (f[u++] = s[c + 2 * o]),
              (f[u++] = s[c + 3 * o])
        }
        t && t(f, o, h)
      }),
      a.open('GET', e, !0),
      a.send(null),
      a
    )
  }
  function n(e, t) {
    for (
      var r,
        a,
        n,
        i,
        o,
        h,
        f = (e.byteLength / 12) | 0,
        t = t || new Uint32Array(f),
        u = 0;
      f > u;
      u++
    )
      (r = Math.min(32768, e[3 * u])),
        (a = Math.min(32768, e[3 * u + 1])),
        (n = Math.min(32768, e[3 * u + 2])),
        (i = Math.max(Math.max(r, a), n)),
        (o = Math.max(-16, Math.floor(Math.log2(i))) + 16),
        (h = Math.pow(2, o - 24)),
        511 == Math.floor(i / h + 0.5) && ((h *= 2), (o += 1)),
        (t[u] =
          (Math.floor(r / h + 0.5) << 23) +
          (Math.floor(a / h + 0.5) << 14) +
          (Math.floor(n / h + 0.5) << 5) +
          (0 | o))
    return t
  }
  function i(e, t) {
    for (
      var r, a, n = e.byteLength >> 2, t = t || new Float32Array(3 * n), i = 0;
      n > i;
      i++
    )
      (r = e[i]),
        (a = Math.pow(2, (31 & r) - 24)),
        (t[3 * i] = (r >>> 23) * a),
        (t[3 * i + 1] = ((r >>> 14) & 511) * a),
        (t[3 * i + 2] = ((r >>> 5) & 511) * a)
    return t
  }
  function o(t, r) {
    for (
      var a,
        n,
        i,
        o,
        h,
        f = (t.byteLength / 12) | 0,
        r = r || new Uint8Array(4 * f),
        u = 0;
      f > u;
      u++
    )
      (a = t[3 * u]),
        (n = t[3 * u + 1]),
        (i = t[3 * u + 2]),
        (o = Math.max(Math.max(a, n), i)),
        (e = Math.ceil(Math.log2(o))),
        (h = Math.pow(2, e - 8)),
        (r[4 * u] = (a / h) | 0),
        (r[4 * u + 1] = (n / h) | 0),
        (r[4 * u + 2] = (i / h) | 0),
        (r[4 * u + 3] = e + 128)
    return r
  }
  function h(e, t) {
    for (
      var r, a = e.byteLength >> 2, t = t || new Float32Array(3 * a), n = 0;
      a > n;
      n++
    )
      (r = Math.pow(2, e[4 * n + 3] - 136)),
        (t[3 * n] = e[4 * n] * r),
        (t[3 * n + 1] = e[4 * n + 1] * r),
        (t[3 * n + 2] = e[4 * n + 2] * r)
    return t
  }
  function f(e, t, r, a) {
    ;(t = Math.pow(2, void 0 === t ? 1 : t) / 2), void 0 === r && (r = 2.2)
    for (
      var n,
        i = 1 / r,
        o = e.byteLength >> 2,
        a = a || new Uint8ClampedArray(4 * o),
        h = 0;
      o > h;
      h++
    )
      (n = t * Math.pow(2, e[4 * h + 3] - 136)),
        (a[4 * h] = 255 * Math.pow(e[4 * h] * n, i)),
        (a[4 * h + 1] = 255 * Math.pow(e[4 * h + 1] * n, i)),
        (a[4 * h + 2] = 255 * Math.pow(e[4 * h + 2] * n, i)),
        (a[4 * h + 3] = 255)
    return a
  }
  function u(e, t, r, a) {
    ;(t = Math.pow(2, void 0 === t ? 1 : t) / 2), void 0 === r && (r = 2.2)
    for (
      var n = 1 / r,
        i = (e.byteLength / 12) | 0,
        a = a || new Uint8ClampedArray(4 * i),
        o = 0;
      i > o;
      o++
    )
      (a[4 * o] = 255 * Math.pow(e[3 * o] * t, n)),
        (a[4 * o + 1] = 255 * Math.pow(e[3 * o + 1] * t, n)),
        (a[4 * o + 2] = 255 * Math.pow(e[3 * o + 2] * t, n)),
        (a[4 * o + 3] = 255)
    return a
  }
  return (
    (t.floatToRgbe = o),
    (t.rgbeToFloat = h),
    (t.floatToRgb9_e5 = n),
    (t.rgb9_e5ToFloat = i),
    (t.rgbeToLDR = f),
    (t.floatToLDR = u),
    t
  )
})
