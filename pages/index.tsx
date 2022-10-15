import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";


const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="h-screen ">
    {/* <TopNavbar/> */}
    <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/auth/login">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Login
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/auth/register">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
                    Register
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </a>
                </Link>
              </li>
            </ul>
    </div>
  );
};

export default Home;
//RESOURCE: https://medium.com/swlh/typing-next-js-components-using-typescript-2f1d0dc30c4c
