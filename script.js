const form = document.getElementById("form");
const clear = document.getElementById("clear");

form.addEventListener("submit", function(e) {
    const type = document.getElementById("type").value;
    const pv = document.getElementById("pv").value;
    const t = document.getElementById("t").value;
    const pct = document.getElementById("pct").value;
    var fv;

    if (type === "simple") {
        fv = pv*(1+t*(pct/100));
    } else {
        fv = (pv*Math.pow((1+pct/100), t)).toFixed(1);
    }

    document.getElementById("fv").innerHTML = fv;
    document.getElementById("k").innerHTML = (fv-pv).toFixed(1);

    e.preventDefault();
});

clear.addEventListener("click", function(e) {
    document.getElementById("pv").value = "";
    document.getElementById("t").value = "";
    document.getElementById("pct").value = "";
    document.getElementById("fv").innerHTML = "";
    document.getElementById("k").innerHTML = "";

    e.preventDefault();
})