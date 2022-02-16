const EXAMPLES = require('./EXAMPLES.json')

const fs = require('fs')

for (const { title, id, slug, description } of EXAMPLES) {
  fs.writeFileSync(
    `site/examples/${id}.md`,
    `
---
  permalink: "docs/${id === EXAMPLES[0].id ? 'index' : id}.html"
  permalinkBypassOutputDir: true
  layout: template.pug
  title: '${title}'
  id: '${id}'
  description: '${
    description
      ? Array.isArray(description)
        ? description.join('<br />')
        : description
      : ''
  }'
---
  `.trim(),
    () => {},
  )
}
