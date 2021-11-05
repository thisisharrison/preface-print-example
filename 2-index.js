// https://developer.mozilla.org/en-US/docs/Web/Guide/Printing

function setPrint() {
    // this refers to an HTMLIFrameElement
    this.contentWindow.__container__ = this;
    this.contentWindow.onbeforeunload = cleanUp;
    this.contentWindow.onafterprint = cleanUp;
    this.contentWindow.focus(); // Required for IE
    this.contentWindow.print();
}

function print(html) {
    const iFrame = document.createElement("iframe");
    iFrame.onload = setPrint;
    iFrame.style.position = "fixed";
    iFrame.style.right = "0";
    iFrame.style.bottom = "0";
    iFrame.style.width = "0";
    iFrame.style.height = "0";
    iFrame.style.border = "0";
    // set the source of this iFrame to this html page
    iFrame.src = html;
    // adds this iFrame to the body of the page
    document.body.appendChild(iFrame);
}

function cleanUp() {
    document.body.removeChild(this.__container__);
}

function printVisible(html) {
    print(html);
}

document.addEventListener("keydown", e => {
    if (e.code === "MetaLeft" && e.code === "KeyP") {
        console.log(e.code);
    }
});

document.onkeydown = function (e) {
    if ((e.ctrlKey && e.code === "KeyP") || (e.metaKey && e.code === "KeyP")) {
        alert("Not allowed!");
        return false;
    }
};
