import * as d3 from 'd3'

const space = '&nbsp;'
const line = '—————————————'
const block = '<span class="block"></span>'


export function mouseover(node) {

    const focus = d3.select('body').append('div').attr('id', 'focus')

    // Heading

    focus.append('h2').html(node.name)
    focus.append('h3').html(`${node.docs} Publications`)

    // Set tokens keys

    s.tokens = node.tokens.slice(0, 3).map(token => token.term)

    // Tokens

    focus.append('p').html(space)
    focus.append('h3').html('Tokens by tf-idf')
    focus.append('p').html(line)
    node.tokens.forEach(token => {
        const blocks = block.repeat(token.tfidf)
        focus.append('p').html(`${blocks} &nbsp; ${token.term}`)
    })

}

export function mouseout() {

    d3.select('#focus').remove()
    s.tokens = []

}