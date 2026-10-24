export default function ChatPage() {
  return (
    <div className="flex h-screen">
      {/* Contact List */}
      <div className="w-1/3 border-r p-4">
        <h2 className="text-xl font-bold mb-4">Messages</h2>

        <div className="p-3 border rounded mb-2">Rifat Khan</div>

        <div className="p-3 border rounded">Nusrat Jahan</div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-4">Rifat Khan</h2>

        <div className="bg-gray-100 p-3 rounded mb-2">
          Hi! Can you share the file?
        </div>

        <div className="bg-blue-500 text-white p-3 rounded mb-2 ml-auto w-fit">
          Sure! Here it is.
        </div>

        <input
          type="text"
          placeholder="Type a message..."
          className="w-full border p-2 rounded mt-4"
        />
      </div>
    </div>
  );
}
