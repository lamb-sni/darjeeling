import React from "react";
import Message from "../../components/atoms/Message";

const ShowMessage = () => {
  // なんにせよなんらかの形でデータを渡してあげないといけない
  // component内でデータの諸々を完結させるためにはreduxなりなんなりを使ってstoreを構成しないと無理（たぶん）
  // 単純にstringを表示させるだけのcomponentだとしたら以下のようなパターンがあると思う
  return (
    <>
      <Message message="hello, world" /> {/** propsにメッセージを持たせる */}
      <Message>foooooooo</Message> {/** childrenをメッセージとして送る */}
    </>
  );
};

export default ShowMessage;