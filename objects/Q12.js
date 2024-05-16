//12. Write a JavaScript function to parse an URL.
function parse(urlstring) {
    const url=new URL(urlstring);
    return {
        protocal:url.protocol,
        hostname:url.hostname,
        port:url.port,
        pathname:url.pathname,
        search:url.search

    }
    
}
console.log(parse('https://www.index.html:8080/path/to/file?'))