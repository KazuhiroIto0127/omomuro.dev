const GridCssPractice = () => {
  return (
    <>
      <h1 className="mb-2 text-lg font-bold">TailwindでGridを学ぶ！</h1>
      <p className="mb-8">gridにおいての頻出ワード：列、行、ライン、セル、トラック</p>
      <section className="mb-8">
        <p className="font-bold">grid-col-3</p>
        <p className="mb-3 text-sm">3列。左から並べて折り返して表示</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-red-500">1</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-blue-500">2</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-green-500">3</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-yellow-500">4</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-gray-500">5</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-purple-500">6</div>
        </div>
      </section>

      <section className="mb-8">
        <p className="font-bold">col-span-N</p>
        <p className="mb-3 text-sm">列をNつ分専有させる</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex h-10 w-full items-center justify-center rounded-md bg-red-500">1</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-blue-500">2</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-green-500">3</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-yellow-500">4</div>
          <div className="col-span-3 flex h-10 w-full items-center justify-center rounded-md bg-gray-500">5</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-purple-500">6</div>
        </div>
      </section>

      <section className="mb-8">
        <p className="font-bold">col-start-N & col-end-N</p>
        <p className="mb-3 text-sm">列の開始と終わりを指定する</p>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-start-2 col-end-4 flex h-10 w-full items-center justify-center rounded-md bg-red-500">
            1
          </div>
          <div className="col-start-2 col-end-5 flex h-10 w-full items-center justify-center rounded-md bg-blue-500">
            2
          </div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-green-500">3</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-yellow-500">4</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-gray-500">5</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-purple-500">6</div>
        </div>
      </section>

      <section className="mb-8">
        <p className="font-bold">grid-row-3 (+ grid-flow-col)</p>
        <p className="mb-3 text-sm">3行。左から並べて折り返して表示</p>
        <div className="grid grid-flow-col grid-rows-3 gap-4">
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-red-500">1</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-blue-500">2</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-green-500">3</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-yellow-500">4</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-gray-500">5</div>
          <div className="flex h-10 w-full items-center justify-center rounded-md bg-purple-500">6</div>
        </div>
      </section>

      <section className="mb-8">
        <p className="font-bold">rowとcolを指定して応用</p>
        <p className="mb-3 text-sm">spanやstartを利用</p>
        <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
          <div className="flex h-full w-full items-center justify-center rounded-md bg-red-500">1</div>
          <div className="row-span-2 flex h-full w-full items-center justify-center rounded-md bg-blue-500">2</div>
          <div className="row-span-2 flex h-full w-full items-center justify-center rounded-md bg-green-500">3</div>
          <div className="row-span-2 flex h-full w-full items-center justify-center rounded-md bg-yellow-500">4</div>
          <div className="col-start-2 col-end-4 row-start-3 flex h-full w-full items-center justify-center rounded-md bg-gray-500">
            5
          </div>
        </div>
      </section>
    </>
  );
};
export default GridCssPractice;
