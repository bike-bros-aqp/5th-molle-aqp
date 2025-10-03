type RowProp = {
  name: string;
  desde: number;
  hasta?: number;
};

type Props = {
  content: RowProp[];
}

const year = new Date().getFullYear();

const formatYear = (desde:number,hasta?:number):string => {
  if(hasta) return `${hasta} - ${desde}`
  return `desde ${desde}`
}

const formatEdad = (desde:number,hasta?:number):string => {
  const inicio = year-desde
  if(hasta) return `${inicio} - ${year-hasta} años`
  return `${inicio} años +`
}

function Categorias(props:Props) {
  const { content } = props;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200">
        <thead className="ltr:text-center rtl:text-right">
          <tr className="text-primary font-bold">
            <th className="px-3 py-2 whitespace-nowrap">CATEGORIA</th>
            <th className="px-3 py-2 whitespace-nowrap">EDAD</th>
            <th className="px-3 py-2 whitespace-nowrap"> AÑO NACIMIENTO</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {
            content?.map(({ name, desde, hasta }) => (
              <tr className="*:text-gray-100 *:first:font-medium" key={`row-${name}`}>
                <td className="px-3 py-2 text-center text-sm">{name}</td>
                <td className="px-3 py-2 text-center text-sm">{formatEdad(desde,hasta)}</td>  
                <td className="px-3 py-2 text-center text-sm">{formatYear(desde,hasta)}</td>  
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

  );
}

export default Categorias;
