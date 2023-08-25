import Layout from "../../components/layout";

export default function Page() {
  return (
    <>
      <Layout>
        <div className="w-full pt-5 bg-blue-300 rounded-lg">
          <div className="flex justify-between">
            <p className="pl-5 text-green-600 text-2xl">100$</p>
            <p className="pr-5 text-cyan-600 text-2xl"><span>1</span>/30</p>
          </div>
          <div className="flex justify-end items-center">
            <div className="flex justify-center absolute left-2/4 right-2/4">
              <p className="text-xl">1000$</p>
            </div>
            <div className="hidden justify-start items-start rounded-full mr-5 max-[500px]:flex"><p
              className="text-xl">30</p></div>
          </div>
          <div
            className="max-w-4xl m-auto mt-6 pl-10 pr-10 pb-10 max-[500px]:pl-3 max-[500px]:pr-3 max-[500px]:pb-3 max-[500px]:mt-3">
            <div
              className="flex justify-center items-center m-auto min-h-[3.5rem] text-center bg-amber-100 rounded-2xl">
              <p className="pl-5 pr-5 pt-5 pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                consectetur dolor eligendi, minima modi nemo nesciunt quis sed. Aperiam beatae dolorem eaque eligendi
                fugit quam reprehenderit velit! Iure, quibusdam sed?</p></div>
            <div className="flex items-center justify-center flex-col mt-10">
              <div className="answer-line">
                <button className="answer first-answer max-[500px]:mt-0"><p>A.</p><p className="answer-text">@@!23
                  3@!@@@%@</p></button>
                <button className="answer two-answer"><p>B.</p><p className="answer-text">@@!233@ !@@@%@</p></button>
              </div>
              <div className="flex justify-center items-center bg-amber-100 rounded-full w-9 h-9 max-[500px]:hidden">
                <p>30</p></div>
              <div className="answer-line">
                <button className="answer first-answer"><p>C.</p><p className="answer-text">@@!233 @!@@@%@</p>
                </button>
                <button className="answer two-answer"><p>D.</p><p className="answer-text">@@!23 3@!@@@%@</p></button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}