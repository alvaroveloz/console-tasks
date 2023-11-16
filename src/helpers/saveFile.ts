import fs from 'fs';


const path = './db/data.json';
export const saveFile = ( data: any) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

export const readFile = ()=> {
  if (!fs.existsSync(path)) {
    return null;
  }

  const info = fs.readFileSync(path, { encoding: 'utf-8' });
  return JSON.parse(info);

}
