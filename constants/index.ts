import { CiCreditCard1 } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { LiaBalanceScaleRightSolid, LiaWalletSolid } from "react-icons/lia";
import { LuCircleDollarSign } from "react-icons/lu";
import { PiNoteDuotone } from "react-icons/pi";

export const sidebarLinks = [
  {
    icon: FiHome,
    route: "/",
    label: "Dashboard",
  },
  {
    icon: LuCircleDollarSign,
    route: "/requests",
    label: "Requests",
    children: [
      {
        route: "/pending",
        label: "Pending",
      },
      {
        route: "/my-requests",
        label: "My requests",
      },
      {
        route: "/all-requests",
        label: "All requests",
      },
    ],
  },
  {
    icon: LiaWalletSolid,
    route: "/balance",
    label: "Balance",
  },
  {
    icon: PiNoteDuotone,
    route: "/transaction",
    label: "Transaction",
  },
  {
    icon: CiCreditCard1,
    route: "/cardnbudget",
    label: "Card & Budget",
  },
];
