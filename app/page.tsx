export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8">
        <h1 className="text-3xl font-bold mb-6">
          Azure Mini Form
        </h1>

        <input
          type="text"
          placeholder="記事テーマ"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          placeholder="読者層"
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          placeholder="メモ"
          className="w-full border p-3 rounded mb-4 h-32"
        />

        <button className="bg-blue-500 text-white px-6 py-3 rounded-xl">
          生成する
        </button>
      </div>
    </main>
  );
}