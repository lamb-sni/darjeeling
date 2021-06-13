import React from "react";

// propsの全てがoptionalだとweakTypesとしてcompileが通らなくなったりするので、あまりするべきではない
interface Props {
  message?: string;
  children?: string | React.ReactNode;
}

const Message = (props: Props) => {
  // 両方の型がoptionalなため、どちらも存在しない場合があり、その場合はrenderがruntime errorを引き起こすためここで回避
  if (!props.message && !props.children) {
    return null;
  }

  // props.childrenが存在すればそちらを、なければmessageを表示する
  return <div>{props.children || props.message}</div>;
};

export default Message;
