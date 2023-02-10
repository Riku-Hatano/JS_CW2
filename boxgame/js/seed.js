const seed = () => {
    const seed = $("<div></div>");
    // const x = Math.floor(Math.random() * 600);
    // const y = Math.floor(Math.random() * 200);
    const x = 105;
    const y = 105;
    console.log(`x: ${x} y: ${y}`)
    seed.css({"left": `${x}px`});
    seed.css({"top": `${y}px`});
    seed.addClass("seed");
   
    $("section").append(seed);
    return {
        x: x,
        y: y
    }
}

export default seed;