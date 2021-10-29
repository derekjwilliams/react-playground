function styleInPage(css, verbose){
    // if(typeof getComputedStyle== "undefined")
    // getComputedStyle= function(elem){
    //     return elem.currentStyle;
    // }
    var who, hoo, values= [], val,
    nodes= document.body.getElementsByTagName('*'),
    L= nodes.length;
    cy.log(JSON.stringify(nodes, null, 2))

    cy.log('nodes length', nodes.length)
    for(var i= 0; i<L; i++){
        who= nodes[i];

        if(who.style){
            hoo= '#'+(who.id || who.nodeName+'('+i+')');
            val= who.style.fontFamily || getComputedStyle(who, '')[css];
            if(val){
                if(verbose) values.push([hoo, val]);
                else if(values.indexOf(val)== -1) values.push(val);
            }
        }
    }
    return values;
}

describe('Check Willamette Apply Page Font: Family, Style, and Transforms', () => {
    beforeEach(() => {
    cy.visit('https://willamette.edu/admission/apply-now/index.html')
  })
  it('Check Typograpy', () => {
    cy.wait(1000)
    debugger
    const nodes= cy.get('#siteContent').each(($item) =>
    {
      debugger
      cy.log('here')
    })
    cy.log('length', JSON.stringify(nodes.length))
    //document.getElementsByClassName('card')

    for (let i = 0; i < nodes.length; i++) {
    const fontFamily = getComputedStyle(nodes[i], '')['fontFamily']
    cy.log('node 0 style', JSON.stringify(fontFamily, null, 2))
//    cy.log('nodes in test', JSON.stringify(nodes, null, 2))

    }

//    const styles = styleInPage('fontFamily')
  //  cy.log(JSON.stringify(styles, null, 2))
    expect(true).to.equal(true)
  })
})