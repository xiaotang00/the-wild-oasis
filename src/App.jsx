import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, //设置变为stale时间：60*1000ms=60s，设置为0则更新后立即变为过时时间
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              {/* 这个与下面两行意思是一样的 */}
              {/* <Route index element={<Dashboard />} /> */}
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

// import styled from "styled-components";
// import GlobalStyles from "./styles/GlobalStyles";
// import Heading from "./ui/Heading";
// import Button from "./ui/Button";
// import Input from "./ui/Input";
// import Row from "./ui/Row";
// const StyleApp = styled.main`
//   /* background-color: orangered; */
//   padding: 20px;
// `;
// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <StyleApp>
//         <Row>
//           <Row type="horizontal">
//             {/* as就是传入html中标准的<h2>，但如果对应样式文件中将props.styled改为props.as，那么as就是自定义样式了 */}
//             {/* <Heading as="h1">The Wild Oasis</Heading> */}
//             {/* <h1>The Wild Oasis</h1> */}
//             {/* type参数就是传入自己定义的 */}
//             <Heading type="h1">The Wild Oasis</Heading>
//             <div>
//               <Heading type="h2">Check in and out</Heading>
//               <Button onClick={() => alert("Check in")}>check in</Button>
//               <Button
//                 variations="secondary"
//                 size="small"
//                 onClick={() => alert("Check out")}
//               >
//                 check out
//               </Button>
//             </div>
//           </Row>

//           <Row>
//             <Heading type="h3">Form</Heading>
//             <form>
//               <Input type="number" placeholder="Number of guests" />
//               <Input type="number" placeholder="Number of guests" />
//             </form>
//           </Row>
//         </Row>
//       </StyleApp>
//     </>
//   );
// }

// export default App;
