function getAttributes() {
    var lien = document.getElementById('w3r');
    var attributes = 'href= ' + lien.href + '<br/>'
        + 'hreflang = ' + lien.hreflang + '<br/>'
        + 'rel = ' + lien.rel + '<br/>'
        + 'target = ' + lien.target + '<br/>'
        + 'type = ' + lien.type + '<br/>';
    document.getElementById('result').innerHTML = attributes;
}