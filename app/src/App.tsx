import React from "react";
import ShowMessage from "./pages/ShowMessage";
import './App.css';

/**
 * 概要
 * compnentディレクトリにMessageという渡されたstringをdivでwrapして返すコンポーネントを作成（粒度はatomic designで）
 * pagesにmessageを表示させるためのページであるShowMessageを作成
 * 一番上からはShowMessageのみを読み込み、Messageコンポーネントへのデータの受け渡しなどはShowMessageコンポーネント内で行う
 * この形を取ることで、一番上のコンポーネントでは分離されたviewを読み込むだけ、それぞれのコンポーネントへのデータ処理はpages以下に分離できるのですっきりする
 * pagesに関しては本来はURL単位などで作るといいと思う 実際のShowMessageはatomic designでいうところのorganismsの単位になるかな
 */

function App() {
  return (
    <main>
      <ShowMessage />
    </main>
  );
}

export default App;
