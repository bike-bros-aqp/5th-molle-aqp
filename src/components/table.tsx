type RowProp = {
  name: string;
  desde?: number;
  hasta?: number;
};

type Props = {
  content: RowProp[];
}

const year = new Date().getFullYear();

function Categorias(props:Props) {
  const { content } = props;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200">
        <thead className="ltr:text-center rtl:text-right">
          <tr className="text-primary font-bold">
            <th className="px-3 py-2 whitespace-nowrap">CATEGORIA</th>
            <th className="px-3 py-2 whitespace-nowrap">DESDE</th>
            <th className="px-3 py-2 whitespace-nowrap">HASTA</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {
            content?.map(({ name, desde, hasta }) => (
              <tr className="*:text-gray-100 *:first:font-medium" key={`row-${name}`}>
                <td className="px-3 py-2 text-center text-sm">{name}</td>
                <td className="px-3 py-2 text-center text-sm">{desde ? year-desde + ' años' : ''}</td>  
                <td className="px-3 py-2 text-center text-sm">{hasta ? year-hasta + ' años' : ''}</td>  
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

  );
}

export default Categorias;