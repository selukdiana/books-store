import { type IAdditionalAttributeProps } from "../../../types/props";
import "./AdditionalAttribute.css";

export const AdditionalAttribute = ({
  name,
  value,
}: IAdditionalAttributeProps) => {
  return <li className="additional-attribute">{`${name}: ${value}`}</li>;
};
