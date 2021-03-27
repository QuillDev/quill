import React from "react";

interface Parameter {
  name?: string;
  required?: boolean;
}
interface ModuleCommandProps {
  name: string;
  nsfw?: boolean;
  description: string;
  params?: Parameter[];
}

const buildParams = (params?: Parameter[]) => {
  if (!params) return "";
  let nodes = [];
  params.forEach((param) => {
    nodes.push(
      <span key={param.name} className={`inline-block pr-1 ${param.required ? "req" : "opt"}`}>
        [{(!param.required ? "?" : "") + param.name}]
      </span>
    );
  });

  return nodes;
};
const ModuleCommand: React.FC<ModuleCommandProps> = ({
  name,
  description,
  params,
  nsfw,
}) => {
  const paramBody = buildParams(params);
  return (
    <>
      <tr>
        <td>
          {nsfw ? <span className="inline-block text-red-500 px-2">[NSFW]</span> : ""}
          {name}
        </td>
        <td>
          <p>
            {name} {paramBody}
          </p>
        </td>
        <td>{description}</td>
      </tr>
    </>
  );
};
export default ModuleCommand;
