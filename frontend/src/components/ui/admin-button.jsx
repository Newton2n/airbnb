import Link from "next/link";
function AdminButton({ homeId }) {
  return (
    <>
      {" "}
      <div>
        <button className="bg-red-500 p-2 rounded cursor-pointer">
          Delete
        </button>
        <Link
          href={`/edit-home/${homeId}`}
          className="bg-blue-500 p-2 rounded ml-2 cursor-pointer"
        >
          {" "}
          Edit Home
        </Link>
      </div>
    </>
  );
}

export default AdminButton;
