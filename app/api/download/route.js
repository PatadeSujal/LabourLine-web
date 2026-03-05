import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const apkDir = path.join(process.cwd(), "apk-file");
  
  try {
    const files = fs.readdirSync(apkDir);
    const apkFile = files.find(file => file.endsWith(".apk"));

    if (!apkFile) {
      return new NextResponse("APK file not found.", { status: 404 });
    }

    const filePath = path.join(apkDir, apkFile);
    const fileStat = fs.statSync(filePath);

    // Readable Stream for Next.js
    const stream = fs.createReadStream(filePath);
    const readableStream = new ReadableStream({
      start(controller) {
        stream.on('data', (chunk) => controller.enqueue(new Uint8Array(chunk)));
        stream.on('end', () => controller.close());
        stream.on('error', (err) => controller.error(err));
      },
      cancel() {
        stream.destroy();
      }
    });

    return new NextResponse(readableStream, {
      headers: {
        "Content-Type": "application/vnd.android.package-archive",
        "Content-Disposition": `attachment; filename="${apkFile}"`,
        "Content-Length": fileStat.size.toString(),
      },
    });
  } catch (error) {
    console.error("Error reading apk directory:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
