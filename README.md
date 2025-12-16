# WebGL Physically Based Rendering Playground

![Screenshot from the renderer showcasing a specific set of lighting parameters](webgl-pbr-export-0.png)
![Screenshot from the renderer showcasing a different set of lighting parameters](webgl-pbr-export-1.png)

WebGL 2.0 physically-based renderer featuring IBL with environment map convolution, HDR tone mapping, analytical lights, and the metallic-roughness PBR workflow. Implementation based on LearnOpenGL's PBR theory.

## Building Locally

```bash
git clone --recurse-submodules git@github.com:gnikoloff/webgl-pbr-dojo.git
cd webgl-pbr-dojo
npm run setup
npm run dev
```

## Dependencies

- [`Minimal WebGL2 library`](https://github.com/gnikoloff/hwoa-rang-gl2)
- [`Tweening utils`](https://github.com/gnikoloff/hwoa-rang-tween)
- [`3d math helpers`](https://github.com/gnikoloff/hwoa-rang-math)
- [KTX 2.0 (.ktx2) parser and serializer](https://github.com/donmccurdy/KTX-Parse)
- [Tweakpane](https://tweakpane.github.io/docs/)

## References

- [The PBR chapter in LearnOpenGL](https://learnopengl.com/PBR/Theory)
- [Real Shading in Unreal Engine 4](https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf)

## License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
