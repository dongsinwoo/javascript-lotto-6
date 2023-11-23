import LottoMachine from "./controller/lottoMachine";

class App {
  async play() {
    const play = new LottoMachine()
    play.paly()
  }
}

export default App;
