var map = new Map();
map.set('name', 'John');
map.set('name', 'Andy');
map.set(1, 'number one');
map.set(NaN, 'No value');
map.get('name');
map.get(1); 
map.get(NaN);

for (let element of map)
{
 console.log(element);
}