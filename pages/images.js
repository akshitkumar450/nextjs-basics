import Image from "next/image";
import Head from "next/head";
function images() {
  return (
    <div>
      <Head>
        <title>Images page</title>
      </Head>
      <div>
        <Image
          responsive="true"
          src="/adwords.png"
          alt="adwords"
          width={500}
          height="500"
        />
      </div>
      <div>
        <Image src="/coach.png" alt="adwords" width={500} height="500" />
      </div>
      <div>
        <Image src="/course.png" alt="adwords" width={500} height="500" />
      </div>
      <div>
        <Image src="/vercel.svg" alt="adwords" width={500} height="500" />
      </div>
      <div>
        <Image src="/favicon.ico" alt="adwords" width={500} height="500" />
      </div>
      <div>
        <Image src="/adwords.png" alt="adwords" width={500} height="500" />
      </div>
      <Image
        src="https://images.unsplash.com/photo-1650266676353-c18b8504ebbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="adwords"
        width={500}
        height="500"
      />
    </div>
  );
}

export default images;
