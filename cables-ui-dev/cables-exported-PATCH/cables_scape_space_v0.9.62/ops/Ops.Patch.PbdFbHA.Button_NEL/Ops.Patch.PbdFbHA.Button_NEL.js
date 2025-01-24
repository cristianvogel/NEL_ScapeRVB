// inputs
const parentPort = op.inObject("link");
const buttonTextPort = op.inString("Text", "Button");
const checksum = op.inValue("Checksum", 0);
const update = op.inTrigger("update");

const inGreyOut = op.inBool("Grey Out", false);
const inVisible = op.inBool("Visible", true);

const elementIn = op.inObject("Left Element");

// outputs
const siblingsPort = op.outObject("childs");
const elementPort = op.outObject("element");
const buttonPressedPort = op.outTrigger("Pressed Trigger");

// vars
const colors = ["rgba(85,85,85,0.5)", "aquamarine"];

const el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("cablesEle");
el.classList.add("sidebar__item");
el.classList.add("sidebar--button");
el.style.display = "grid";
el.style.gridTemplateColumns = "0.5fr 1fr 0.025fr";
el.style.alignItems = "start";
el.style.alignContent = "stretch";
el.style.height = "5%";
el.style.backgroundColor = "transparent";
elementPort.set(el);

const button = document.createElement("div");
button.classList.add("sidebar__button-input");
button.style.gridColumn = "2/3";
el.appendChild(button);

const inputText = document.createTextNode(buttonTextPort.get());
button.appendChild(inputText);

button.addEventListener("click", onButtonClick);

op.toWorkNeedsParent("Ops.Sidebar.Sidebar");

// events
parentPort.onChange = onParentChanged;
buttonTextPort.onChange = onButtonTextChanged;
op.onDelete = onDelete;
elementIn.onChange = onElementInChanged;

const greyOut = document.createElement("div");
greyOut.classList.add("sidebar__greyout");
greyOut.style.gridColumn = "1 / 4";
el.appendChild(greyOut);
greyOut.style.display = "none";

inGreyOut.onChange = function ()
{
    greyOut.style.display = inGreyOut.get() ? "block" : "none";
};

inVisible.onChange = function ()
{
    el.style.display = inVisible.get() ? "grid" : "none";
};

function onButtonClick()
{
    buttonPressedPort.trigger();
}

function onButtonTextChanged()
{
    const buttonText = buttonTextPort.get();
    button.textContent = buttonText;
    if (CABLES.UI)
    {
        op.setUiAttrib({ "extendTitle": buttonText });
    }
}

function onElementInChanged()
{
    if (elementIn.get() !== null)
    {
        let icons = elementIn.get();
        icons.style.gridColumn = "1/3";
        el.appendChild(icons);
    }
}

function onParentChanged()
{
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement)
    {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    }
    else
    { // detach
        if (el.parentElement)
        {
            el.parentElement.removeChild(el);
        }
    }
}

function showElement(el)
{
    if (el)
    {
        el.style.display = "grid";
    }
}

function hideElement(el)
{
    if (el)
    {
        el.style.display = "none";
    }
}

function onDelete()
{
    removeElementFromDOM(el);
}

function removeElementFromDOM(el)
{
    if (el && el.parentNode && el.parentNode.removeChild)
    {
        el.parentNode.removeChild(el);
    }
}
