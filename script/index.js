const app = document.getElementById('app');

function display20Flips() {
    const results = [];
    const box_text = document.createElement('div');
    box_text.style.display = 'flex';
    box_text.style.flexWrap = 'wrap';

    for (let i = 1; i <= 20; i++) {
        const p = document.createElement('p');
        p.style.margin = '5px';
        p.innerText = coin.flip().toString();

        results.push(`arremesso ${i} : ${coin.toString()}`)
        box_text.appendChild(p);
    }
    app.appendChild(box_text);
    return results;
}

function display20Images() {
    const results = [];
    const box_img = document.createElement('div');
    box_img.style.display = 'flex';
    box_img.style.flexWrap = 'wrap';

    for (let i = 1; i <= 20; i++) {
        const div = document.createElement('div');
        div.style.margin = '5px';
        box_img.appendChild(coin.flip().toHTML());

        results.push(`arremesso ${i} : ${coin.toString()}`)
    }
    app.appendChild(box_img);
    return results;
}