let guid = '2';

export default function generationGuid() {
  guid = `f${(+new Date()).toString(16)}`;
  return guid;
}
