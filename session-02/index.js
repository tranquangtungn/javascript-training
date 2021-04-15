const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
for (let i=0;i<=5; i++)
{
    ctx.fillRect(150*i+1, 10, 150, 100);
}



