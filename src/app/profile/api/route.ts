import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headersList = headers();

    const theme = request.cookies.get("theme");//1
    cookies().set("test", "t e s t")//2
    let cookieValue = cookies().get("test")

    console.log(requestHeaders.get("Authorization"));
    console.log(cookieValue);
    console.log(`${theme?.name} = ${theme?.value}`);
    console.log(headersList.get("Authorization"));
    
    return new Response("<h1>Profile API data</h1>", {headers:{
        "Content-Type": "text/html",
        "Set-Cookie": "theme=dark"
    }});
}