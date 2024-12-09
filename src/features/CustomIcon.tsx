import { SVGAttributes, memo } from "react";
import { IconType } from "react-icons";

interface Props extends SVGAttributes<SVGAElement> {
  icon: IconType;
}

const CustomIcon = ({ icon: Icon, ...props }: Props) => {
  return <Icon {...props} />;
};

export default memo(CustomIcon);
