"use client"
import React from "react";

export default  function HomeLayout({ children }: { readonly children: React.ReactNode })  {
    return(
        <html lang="en">
            <body>
                <main> {children} </main>
            </body>
        </html>
    );
}