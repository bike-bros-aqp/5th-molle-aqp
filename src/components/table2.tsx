type RowProp = {
  name: string;
  text: string;
};

type Props = {
  content: RowProp[];
}


function Categorias2(props:Props) {
  const { content } = props;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200">
        <tbody className="divide-y divide-gray-200">
          {
            content?.map(({ name, text }) => (
              <tr className="*:text-gray-100 *:first:font-medium" key={`row-${name}`}>
                <td className="px-3 py-2 text-center text-sm">{name}</td>
                <td className="px-3 py-2 text-center text-sm">{text}</td>  
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

  );
}

export default Categorias2;
