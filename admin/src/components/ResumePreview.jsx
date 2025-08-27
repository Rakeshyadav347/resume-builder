import preview from "../assets/resume.png";

function ResumePreview() {
  return (
    <section className="flex justify-center py-12 px-4">
      <div className="shadow-2xl rounded-xl border bg-white p-4 max-w-full">
        <img
          src={preview}
          alt="Resume Preview"
          className="rounded-xl w-full h-auto max-w-[1062px]"
        />
      </div>
    </section>
  );
}

export default ResumePreview;
