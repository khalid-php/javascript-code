document.getElementById('sub').addEventListener('click', loadData);

function loadData() {
    const abc = new XMLHttpRequest();

    abc.open('GET', 'data.text', true);
    abc.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);

        }
    }
    abc.send();
}