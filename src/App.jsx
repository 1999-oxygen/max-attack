import { useEffect, useState } from 'react'
import {
  Search,
  Plus,
  Edit2,
  ChevronDown,
  ChevronUp,
  Settings,
  Clock,
  TrendingUp,
  BarChart2,
  ArrowUpDown,
  Sun,
  Moon,
  CreditCard,
  RefreshCw,
  Calendar,
  MoreVertical,
  MessageSquare,
  User,
  Menu,
  Newspaper,
  Mail,
  BookOpen,
  Users,
  Send,
  HelpCircle,
  Info,
  Award,
  QrCode,
  Bell,
  ArrowLeft,
  MinusCircle,
} from 'lucide-react'

const initialQuotesData = [
  { sym: 'UKOILm', change: '-1210 -1.19%', up: false, time: '20:53:59', spread: '45', b_pre: '100.', b_main: '76', b_sup: '4', a_pre: '100.', a_main: '80', a_sup: '9', low: '98.500', high: '103.073' },
  { sym: 'USOILm', change: '-5232 -5.45%', up: false, time: '23:39:07', spread: '20', b_pre: '90.', b_main: '76', b_sup: '3', a_pre: '90.', a_main: '78', a_sup: '3', low: '90.466', high: '91.379', isRed: true },
  { sym: 'XNGUSDm', change: '-201 -0.66%', up: false, time: '23:38:16', spread: '179', b_pre: '3.00', b_main: '87', b_sup: '', a_pre: '3.02', a_main: '66', a_sup: '', low: '3.0029', high: '3.0232', isBlueAsk: true },
  { sym: 'AUDCADm', change: '+311 0.32%', up: true, time: '23:39:04', spread: '18', b_pre: '0.98', b_main: '81', b_sup: '2', a_pre: '0.98', a_main: '83', a_sup: '0', low: '0.98529', high: '0.98875' },
  { sym: 'AUDCHFm', change: '+31 0.06%', up: true, time: '23:39:00', spread: '9', b_pre: '0.55', b_main: '98', b_sup: '9', a_pre: '0.55', a_main: '99', a_sup: '8', low: '0.55944', high: '0.56108', isRed: true },
  { sym: 'AUDCZKm', change: '+337 0.23%', up: true, time: '23:38:23', spread: '249', b_pre: '14.92', b_main: '35', b_sup: '', a_pre: '14.94', a_main: '84', a_sup: '', low: '14.8690', high: '14.9238', isBlueAsk: true },
  { sym: 'AUDDKKm', change: '+598 0.13%', up: true, time: '23:39:03', spread: '1040', b_pre: '4.58', b_main: '97', b_sup: '3', a_pre: '4.60', a_main: '01', a_sup: '3', low: '4.51219', high: '4.58989', isBlueAskLine: true },
  { sym: 'AUDHUFm', change: '-408 -0.19%', up: false, time: '23:38:30', spread: '308', b_pre: '219.', b_main: '91', b_sup: '4', a_pre: '220.', a_main: '22', a_sup: '2', low: '219.442', high: '220.176' },
  { sym: 'AUDJPYm', change: '+305 0.27%', up: true, time: '23:39:00', spread: '19', b_pre: '113.', b_main: '76', b_sup: '9', a_pre: '113.', a_main: '78', a_sup: '8', low: '113.584', high: '113.770' },
]

const availableNewQuotes = [
  { sym: 'BTCUSDm', change: '+125 2.15%', up: true, time: '10:00:00', spread: '35', b_pre: '64000.', b_main: '50', b_sup: '0', a_pre: '64000.', a_main: '85', a_sup: '0', low: '63500.00', high: '65000.00' },
  { sym: 'ETHUSDm', change: '-45 -1.25%', up: false, time: '10:00:00', spread: '15', b_pre: '3450.', b_main: '25', b_sup: '0', a_pre: '3450.', a_main: '40', a_sup: '0', low: '3400.00', high: '3500.00', isRed: true },
  { sym: 'EURUSDm', change: '+12 0.10%', up: true, time: '10:00:00', spread: '10', b_pre: '1.08', b_main: '50', b_sup: '5', a_pre: '1.08', a_main: '51', a_sup: '5', low: '1.0800', high: '1.0900' },
  { sym: 'GBPUSDm', change: '-15 -0.12%', up: false, time: '10:00:00', spread: '12', b_pre: '1.26', b_main: '40', b_sup: '2', a_pre: '1.26', a_main: '41', a_sup: '4', low: '1.2600', high: '1.2700', isRed: true },
  { sym: 'USDJPYm', change: '+50 0.35%', up: true, time: '10:00:00', spread: '14', b_pre: '150.', b_main: '25', b_sup: '0', a_pre: '150.', a_main: '26', a_sup: '4', low: '149.50', high: '151.00' },
]

const messagesData = [
  { sender: 'Trading Platform', preview: 'Discover the new financial portal metatrade...', time: '09.04', unread: true, initial: 'Menu' },
  { sender: 'FOREX INSIDER™ FREE FOREX ...', preview: 'BTCUSD TREND REMAINS BEARISH...', time: '26.11.2022', unread: true, initial: 'FX' },
  { sender: 'Trading signals for free Rdcong...', preview: 'Buy Audnzd', time: '25.01.2021', unread: false, initial: 'TS' },
  { sender: 'CyberZingFx Signals Free', preview: 'To get Signals from CyberZingFx Indicators...', time: '22.12.2020', unread: false, initial: 'CZ' },
  { sender: 'signals free everyday', preview: 'belive', time: '13.10.2020', unread: false, initial: 'SF' },
]

const channelsData = [
  { name: 'Algo Trading', desc: 'The best publications of the largest communit...', subs: '448.8 k', verified: true, color: 'bg-blue-100 dark:bg-blue-900', text: 'MQL5' },
  { name: 'Traders', desc: 'Important MQL5.com website and MetaTrade...', subs: '363.3 k', verified: true, color: 'bg-blue-600', text: 'MQL5' },
  { name: 'Forecast and Levels', desc: 'Mini-articles with technical and fundamental a...', subs: '461.7 k', verified: false, color: 'bg-white', isImg: true },
  { name: 'PRO TRADING - ISSAM KASSAS', desc: 'Professional Trading and Professional Indicato...', subs: '55.8 k', verified: false, color: 'bg-gray-200', isImg: true },
  { name: 'Apollo Forex Systems', desc: 'Trading strategies, indicators, systems.', subs: '137.3 k', verified: false, color: 'bg-black text-red-500', text: 'APOLLO' },
]

const HeaderIcon = ({ Icon, className = '', size = 24, onClick }) => (
  <button
    onClick={onClick}
    className={`p-2 flex items-center justify-center focus:outline-none text-gray-700 dark:text-gray-300 hover:opacity-70 transition-opacity ${className}`}
  >
    <Icon size={size} strokeWidth={1.5} />
  </button>
)

const VerifiedBadge = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#007aff" className="ml-1 shrink-0">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#007aff" />
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      fill="white"
      stroke="white"
      strokeWidth="1"
    />
    <path d="M9.5 16.5l-4.5-4.5 1.5-1.5 3 3 7.5-7.5 1.5 1.5-9 9z" fill="#007aff" />
  </svg>
)

const SpreadIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block mx-1 text-gray-400"
  >
    <path d="M4 9h16" />
    <path d="M4 15h16" />
    <path d="M12 4v16" />
  </svg>
)

const QuotesView = ({ openDrawer, quotes, onAddClick, onRemoveQuote }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="flex flex-col h-full bg-white dark:bg-black">
      <div className="flex items-center justify-between px-2 py-1 shadow-sm dark:border-b dark:border-gray-900 bg-white dark:bg-black z-10">
        <div className="flex items-center">
          <HeaderIcon Icon={Menu} onClick={openDrawer} />
          <h1 className="text-[19px] font-semibold ml-2 text-black dark:text-white">Quotes</h1>
        </div>
        <div className="flex items-center gap-1">
          <HeaderIcon Icon={Plus} onClick={onAddClick} />
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`p-2 rounded-full focus:outline-none transition-colors ${
              isEditing ? 'bg-blue-100 dark:bg-[#007aff]/20' : 'hover:opacity-70'
            }`}
          >
            <Edit2
              size={20}
              strokeWidth={1.5}
              className={`text-gray-700 dark:text-gray-300 ${isEditing ? 'text-[#007aff] dark:text-[#007aff]' : ''}`}
            />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {quotes.map((q) => {
          let bidColor = 'text-gray-900 dark:text-gray-100'
          let askColor = 'text-gray-900 dark:text-gray-100'

          if (q.isRed) {
            bidColor = 'text-[#ff3b30]'
            askColor = 'text-[#ff3b30]'
          }
          if (q.isBlueAsk || q.isBlueAskLine) {
            askColor = 'text-[#007aff]'
          }

          return (
            <div
              key={q.sym}
              className="flex justify-between items-center px-4 py-2 border-b border-gray-50 dark:border-gray-900/50 cursor-pointer active:bg-gray-100 dark:active:bg-[#111]"
            >
              {isEditing && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onRemoveQuote(q.sym)
                  }}
                  className="mr-4 text-[#ff3b30] hover:scale-110 transition-transform focus:outline-none"
                  title="Remove quote"
                >
                  <MinusCircle size={22} fill="currentColor" className="text-white dark:text-black" />
                </button>
              )}
              <div className={`flex flex-col ${isEditing ? 'w-full' : 'w-[35%]'}`}>
                <span className={`text-[11px] font-bold ${q.up ? 'text-[#007aff]' : 'text-[#ff3b30]'}`}>{q.change}</span>
                <span className="text-[17px] font-bold text-black dark:text-white tracking-tight">{q.sym}</span>
                <div className="flex items-center text-[11px] text-gray-400 font-mono mt-0.5">
                  <span>{q.time}</span>
                  <SpreadIcon />
                  <span>{q.spread}</span>
                </div>
              </div>
              {!isEditing && (
                <div className="flex justify-end gap-4 w-[65%] text-right">
                  <div className="flex flex-col items-end">
                    <div className={`flex items-start ${bidColor}`}>
                      <span className="text-[16px] pt-1">{q.b_pre}</span>
                      <span className="text-[26px] font-medium leading-none">{q.b_main}</span>
                      <span className="text-[14px] pt-0.5">{q.b_sup}</span>
                    </div>
                    <span className="text-[11px] text-gray-500 mt-1 font-mono tracking-tighter">L: {q.low}</span>
                  </div>
                  <div className="flex flex-col items-end w-[85px]">
                    <div className={`flex items-start ${askColor}`}>
                      <span className="text-[16px] pt-1">{q.a_pre}</span>
                      <span className="text-[26px] font-medium leading-none">{q.a_main}</span>
                      <span className="text-[14px] pt-0.5">{q.a_sup}</span>
                    </div>
                    <span className="text-[11px] text-gray-500 mt-1 font-mono tracking-tighter">H: {q.high}</span>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ChartsView = ({ openDrawer }) => (
  <div className="flex flex-col h-full bg-white dark:bg-[#050505] text-black dark:text-white">
    <div className="flex items-center justify-between px-2 py-1 border-b border-gray-100 dark:border-gray-900">
      <HeaderIcon Icon={Menu} onClick={openDrawer} />
      <HeaderIcon Icon={Plus} className="opacity-80" size={20} />
      <div className="flex items-center justify-center border-b-2 border-black dark:border-white px-1 cursor-pointer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <div className="text-[15px] font-semibold opacity-90 px-2 cursor-pointer">M5</div>
      <HeaderIcon Icon={Clock} className="text-[#007aff]" size={20} />
      <div className="relative p-2 flex items-center cursor-pointer">
        <div className="w-5 h-5 border-2 border-[#007aff] rounded flex flex-col justify-center gap-0.5 px-[2px]">
          <div className="w-full h-1 bg-[#ff3b30]" />
          <div className="w-full h-1 bg-[#007aff]" />
        </div>
      </div>
    </div>

    <div className="flex border-b border-gray-100 dark:border-gray-900">
      <div className="flex-1 bg-[#007aff] text-white flex flex-col justify-center px-2 py-1 relative active:opacity-80 cursor-pointer">
        <span className="text-[9px] font-bold absolute top-1 left-2">SELL</span>
        <div className="text-right mt-1.5 mr-2">
          <span className="text-[17px] font-semibold">4578.</span>
          <span className="text-[22px] font-bold">43</span>
          <sup className="text-[13px] font-bold">5</sup>
        </div>
      </div>
      <div className="w-[110px] flex flex-col bg-white dark:bg-[#111] px-2 py-1 justify-between border-x border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between text-gray-500">
          <button className="active:bg-gray-200 dark:active:bg-gray-800 rounded">
            <ChevronDown size={18} />
          </button>
          <span className="text-[15px] text-black dark:text-white font-medium">0.02</span>
          <button className="active:bg-gray-200 dark:active:bg-gray-800 rounded">
            <ChevronUp size={18} />
          </button>
        </div>
      </div>
      <div className="flex-1 bg-[#007aff] text-white flex flex-col justify-center px-2 py-1 relative active:opacity-80 cursor-pointer">
        <span className="text-[9px] font-bold absolute top-1 left-2">BUY</span>
        <div className="text-right mt-1.5 mr-2">
          <span className="text-[17px] font-semibold">4578.</span>
          <span className="text-[22px] font-bold">71</span>
          <sup className="text-[13px] font-bold">5</sup>
        </div>
      </div>
    </div>

    <div className="flex-1 relative overflow-hidden bg-white dark:bg-[#050505]">
      <div className="absolute top-1 left-2 z-10 pointer-events-none border-b border-gray-200 dark:border-gray-800 w-full pb-1">
        <div className="text-[#007aff] font-semibold text-[13px] flex items-center tracking-tight">
          XAUUSDm <ChevronDown size={14} className="ml-1" />{' '}
          <span className="text-gray-800 dark:text-gray-300 ml-1">M5</span>
        </div>
        <div className="text-[11px] text-gray-600 dark:text-gray-400">Gold vs US Dollar</div>
      </div>

      <svg className="w-full h-full pt-10" viewBox="0 0 400 600" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <line
              x1="40"
              y1="0"
              x2="40"
              y2="40"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-gray-200 dark:text-gray-800"
              strokeDasharray="3,3"
            />
            <line
              x1="0"
              y1="40"
              x2="40"
              y2="40"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-gray-200 dark:text-gray-800"
              strokeDasharray="3,3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <g strokeWidth="1.2">
          <line x1="20" y1="150" x2="20" y2="250" stroke="#00b061" />
          <rect x="18" y="180" width="4" height="60" fill="white" stroke="#00b061" className="dark:fill-black" />
          <line x1="40" y1="200" x2="40" y2="300" stroke="#ff3b30" />
          <rect x="38" y="220" width="4" height="70" fill="#ff3b30" />
          <line x1="60" y1="280" x2="60" y2="480" stroke="#ff3b30" />
          <rect x="58" y="290" width="4" height="150" fill="#ff3b30" />
          <line x1="80" y1="400" x2="80" y2="520" stroke="#00b061" />
          <rect x="78" y="420" width="4" height="80" fill="white" stroke="#00b061" className="dark:fill-black" />
          <line x1="100" y1="480" x2="100" y2="600" stroke="#ff3b30" />
          <rect x="98" y="500" width="4" height="80" fill="#ff3b30" />
          <line x1="120" y1="450" x2="120" y2="550" stroke="#00b061" />
          <rect x="118" y="470" width="4" height="60" fill="white" stroke="#00b061" className="dark:fill-black" />
          <line x1="160" y1="350" x2="160" y2="450" stroke="#00b061" />
          <rect x="158" y="370" width="4" height="70" fill="white" stroke="#00b061" className="dark:fill-black" />
          <line x1="200" y1="200" x2="200" y2="400" stroke="#00b061" />
          <rect x="198" y="250" width="4" height="130" fill="white" stroke="#00b061" className="dark:fill-black" />
          <line x1="220" y1="100" x2="220" y2="220" stroke="#00b061" />
          <rect x="218" y="120" width="4" height="90" fill="white" stroke="#00b061" className="dark:fill-black" />
          <line x1="260" y1="180" x2="260" y2="280" stroke="#ff3b30" />
          <rect x="258" y="200" width="4" height="60" fill="#ff3b30" />
          <line x1="280" y1="220" x2="280" y2="300" stroke="#00b061" />
          <rect x="278" y="240" width="4" height="50" fill="white" stroke="#00b061" className="dark:fill-black" />
        </g>
        <g fill="currentColor" fontSize="11" fontFamily="monospace" className="text-gray-600 dark:text-gray-400">
          <text x="345" y="20">4579.953</text>
          <text x="345" y="60">4573.403</text>
          <text x="345" y="100">4566.853</text>
          <text x="345" y="140">4560.303</text>
          <text x="345" y="180">4553.753</text>
          <text x="345" y="220">4547.203</text>
          <text x="345" y="260">4540.653</text>
          <text x="345" y="300">4534.103</text>
          <text x="345" y="340">4527.553</text>
          <text x="345" y="380">4521.003</text>
          <text x="345" y="420">4514.453</text>
          <text x="345" y="460">4507.903</text>
          <text x="345" y="500">4501.353</text>
          <text x="345" y="540">4494.803</text>
          <text x="345" y="580">4488.253</text>
        </g>
        <line x1="0" y1="40" x2="400" y2="40" stroke="#ff3b30" strokeWidth="0.5" />
        <rect x="340" y="30" width="60" height="24" fill="#20b2aa" />
        <text x="345" y="41" fill="white" fontSize="10" fontFamily="sans-serif">
          4578.435
        </text>
        <text x="345" y="51" fill="white" fontSize="9" fontFamily="sans-serif">
          00:39
        </text>
      </svg>
      <div className="absolute bottom-0 w-full h-[30px] bg-white dark:bg-[#050505] flex justify-between items-center px-2 text-[11px] text-black dark:text-white font-mono z-10 border-t border-gray-100 dark:border-gray-900">
        <span>21 May 08:55</span>
        <span>21 May 12:55</span>
        <span className="pr-12">21 May 16:55</span>
      </div>
    </div>
  </div>
)

const TradeView = ({ openDrawer, accounts }) => {
  const currentAcc = accounts[0]
  return (
    <div className="flex flex-col h-full bg-white dark:bg-black">
      <div className="flex items-center justify-between px-2 py-1 shadow-sm border-b border-gray-100 dark:border-gray-900 bg-white dark:bg-black z-10">
        <div className="flex items-center">
          <HeaderIcon Icon={Menu} onClick={openDrawer} />
          <h1 className="text-[19px] font-semibold ml-2 text-black dark:text-white">Trade</h1>
        </div>
        <div className="flex items-center">
          <HeaderIcon Icon={CreditCard} size={22} className="opacity-90" />
          <HeaderIcon Icon={ArrowUpDown} className="rotate-90 opacity-90 mx-1" />
          <HeaderIcon Icon={Plus} size={22} className="border border-gray-400 rounded-sm p-0.5" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-white dark:bg-black">
        <div className="px-4 py-4 pt-6">
          {[
            { label: 'Balance:', val: currentAcc.balance },
            { label: 'Equity:', val: currentAcc.balance },
            { label: 'Free margin:', val: currentAcc.balance },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-baseline mb-3 text-[15px]">
              <span className="font-bold text-black dark:text-white tracking-tight">{item.label}</span>
              <div className="flex-1 border-b-2 border-dotted border-gray-300 dark:border-gray-700 mx-2 relative top-[-5px] opacity-50" />
              <span className="font-bold text-black dark:text-white">{item.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const HistoryView = ({ openDrawer }) => (
  <div className="flex flex-col h-full bg-white dark:bg-black">
    <div className="flex items-center justify-between px-2 py-1 bg-white dark:bg-black z-10">
      <div className="flex items-center">
        <HeaderIcon Icon={Menu} onClick={openDrawer} />
        <div className="flex flex-col ml-2">
          <h1 className="text-[17px] font-semibold text-black dark:text-white leading-tight">History</h1>
          <span className="text-[13px] text-gray-500">All symbols</span>
        </div>
      </div>
      <div className="flex items-center">
        <HeaderIcon Icon={RefreshCw} size={20} className="mx-1" />
        <HeaderIcon Icon={ArrowUpDown} className="rotate-90 mx-1" size={20} />
        <HeaderIcon Icon={Calendar} size={20} className="ml-1 relative">
          <div className="absolute top-[8px] right-[8px] w-[10px] h-[10px] bg-black dark:bg-white rounded-full flex items-center justify-center">
            <User size={8} className="text-white dark:text-black" />
          </div>
        </HeaderIcon>
      </div>
    </div>

    <div className="flex items-center shadow-sm border-b border-gray-200 dark:border-gray-900 bg-white dark:bg-[#111]">
      <button className="flex-1 text-center py-2 border-b-2 border-[#007aff] active:bg-gray-100 dark:active:bg-[#1c1c1e]">
        <span className="text-[13px] font-bold text-black dark:text-white">POSITIONS</span>
      </button>
      <button className="flex-1 text-center py-2 opacity-50 active:bg-gray-100 dark:active:bg-[#1c1c1e]">
        <span className="text-[13px] font-bold text-gray-700 dark:text-gray-300">ORDERS</span>
      </button>
      <button className="flex-1 text-center py-2 opacity-50 active:bg-gray-100 dark:active:bg-[#1c1c1e]">
        <span className="text-[13px] font-bold text-gray-700 dark:text-gray-300">DEALS</span>
      </button>
    </div>

    <div className="flex-1 overflow-y-auto bg-white dark:bg-[#050505]">
      <div className="px-4 py-4 border-b border-gray-100 dark:border-gray-900">
        {[
          { label: 'Profit:', val: '-41.93', isRed: true },
          { label: 'Deposit:', val: '75.07' },
          { label: 'Swap:', val: '0.00' },
          { label: 'Commission:', val: '0.00' },
          { label: 'Balance:', val: '33.14' },
        ].map((item, idx) => (
          <div key={idx} className="flex justify-between items-baseline mb-2 text-[15px]">
            <span className="font-bold text-black dark:text-white tracking-tight">{item.label}</span>
            <div className="flex-1 border-b-[2px] border-dotted border-gray-200 dark:border-gray-800 mx-2 relative top-[-5px]" />
            <span className={`font-bold ${item.isRed ? 'text-[#ff3b30]' : 'text-black dark:text-white'}`}>{item.val}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-start px-4 py-3 border-b border-gray-100 dark:border-gray-900 cursor-pointer hover:bg-gray-50 dark:hover:bg-[#111]">
        <div className="flex flex-col">
          <span className="font-bold text-[15px] text-black dark:text-white">Balance</span>
          <span className="text-[12px] text-gray-400 mt-1 uppercase tracking-tight">D-KETDXMPE-USD-1097275686918</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[11px] text-gray-500 font-mono mb-1">2026.02.02 13:06:17</span>
          <span className="font-bold text-[15px] text-[#007aff]">75.07</span>
        </div>
      </div>

      <div className="flex justify-between items-start px-3 py-3 border-b border-gray-100 dark:border-gray-900 border-l-4 border-l-[#ff8c00] cursor-pointer hover:bg-gray-50 dark:hover:bg-[#111]">
        <div className="flex flex-col ml-1">
          <div className="flex items-baseline gap-1">
            <span className="font-bold text-[15px] text-black dark:text-white">XAUUSDm,</span>
            <span className="text-[13px] font-semibold text-[#ff3b30]">sell 0.02</span>
          </div>
          <div className="text-[14px] text-gray-600 dark:text-gray-400 mt-1 font-mono tracking-tighter">4 780.222 → 4 801.183</div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[11px] text-gray-500 font-mono mb-1">2026.02.02 13:11:02</span>
          <span className="font-bold text-[15px] text-[#ff3b30]">-41.93</span>
        </div>
      </div>
    </div>
  </div>
)

const MessagesView = ({ openDrawer }) => (
  <div className="flex flex-col h-full bg-white dark:bg-black">
    <div className="flex items-center justify-between px-2 py-1 shadow-sm border-b border-gray-50 dark:border-gray-900 bg-white dark:bg-black z-10">
      <div className="flex items-center w-2/3">
        <HeaderIcon Icon={Menu} onClick={openDrawer} className="shrink-0" />
        <h1 className="text-[19px] font-semibold ml-2 text-black dark:text-white truncate">HACK4LIFE Revela...</h1>
      </div>
      <div className="flex items-center justify-end">
        <span className="text-[9px] font-bold bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-1.5 py-0.5 rounded shadow-sm">MQID</span>
        <HeaderIcon Icon={Search} size={22} />
        <HeaderIcon Icon={Plus} size={24} />
        <HeaderIcon Icon={MoreVertical} size={22} />
      </div>
    </div>

    <div className="flex-1 overflow-y-auto pb-20 bg-white dark:bg-black">
      <div className="pt-2">
        {messagesData.map((msg, i) => (
          <div key={i} className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-[#111]">
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                msg.initial === 'Menu' ? 'bg-[#007aff]' : 'bg-gray-100 dark:bg-gray-800'
              }`}
            >
              {msg.initial === 'Menu' ? (
                <Menu className="text-white" size={20} />
              ) : msg.initial === 'FX' ? (
                <span className="text-pink-600 font-bold italic text-sm">FX</span>
              ) : msg.initial === 'CZ' ? (
                <span className="text-blue-500 font-bold text-lg">CZ</span>
              ) : msg.initial === 'SF' ? (
                <div className="w-full h-full rounded-full bg-[#c0d33e] flex items-center justify-center text-white font-bold">SF</div>
              ) : (
                <div className="w-full h-full rounded-full bg-[#c0d33e] flex items-center justify-center text-white font-bold text-sm">{msg.initial}</div>
              )}
            </div>

            <div className="ml-4 flex-1 flex flex-col overflow-hidden border-b border-gray-50 dark:border-gray-900 pb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-[15px] text-black dark:text-white truncate pr-2">{msg.sender}</span>
                <span className="text-[11px] text-gray-400 shrink-0">{msg.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-gray-600 dark:text-gray-400 truncate">{msg.preview}</span>
                {msg.unread && <div className="w-2.5 h-2.5 bg-[#007aff] rounded-full shrink-0 ml-2" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 py-2 mt-2">
        <span className="text-[13px] font-semibold text-gray-500 tracking-wide uppercase">Popular Channels</span>
      </div>

      <div>
        {channelsData.map((chan, i) => (
          <div key={i} className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-[#111]">
            <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 overflow-hidden ${chan.color}`}>
              {chan.isImg ? (
                <img src="/api/placeholder/40/40" alt="" className="w-full h-full object-cover opacity-80" />
              ) : (
                <span className={`text-[10px] font-bold ${chan.text === 'MQL5' ? 'text-white' : ''}`}>
                  {chan.text === 'MQL5' ? (
                    <div className="flex flex-col items-center leading-none">
                      <span className="text-[12px]">MQL5</span>
                      <span className="text-[8px] bg-red-500 px-1 rounded-sm">EN</span>
                    </div>
                  ) : (
                    chan.text
                  )}
                </span>
              )}
            </div>

            <div className="ml-4 flex-1 flex flex-col overflow-hidden border-b border-gray-50 dark:border-gray-900 pb-3">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center truncate pr-2">
                  <span className="font-bold text-[15px] text-black dark:text-white truncate">{chan.name}</span>
                  {chan.verified && <VerifiedBadge />}
                </div>
                <div className="flex items-center shrink-0">
                  <User size={12} className="text-gray-400 mr-1" />
                  <span className="text-[11px] text-gray-500 font-mono">{chan.subs}</span>
                </div>
              </div>
              <span className="text-[13px] text-gray-600 dark:text-gray-400 truncate">{chan.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const EditableAccountCard = ({ acc, onChange }) => {
  const colors = ['#ffea00', '#007aff', '#ff3b30', '#34c759', '#ff9500', '#8e8e93', '#111111', '#ffffff']

  const cycleColor = () => {
    const next = colors[(colors.indexOf(acc.logoBg) + 1) % colors.length]
    onChange(acc.id, 'logoBg', next)
  }

  const isDemo = acc.badge.toLowerCase() === 'demo'

  return (
    <div className="bg-white dark:bg-[#1c1c1e] rounded-[18px] shadow-sm border border-gray-100 dark:border-gray-800 p-6 flex flex-col items-center relative overflow-hidden mb-4 shrink-0 transition-colors">
      <div className="absolute bottom-4 left-4">
        <QrCode className="text-gray-400 dark:text-gray-500" size={24} />
      </div>
      <div className="absolute bottom-4 right-4">
        <Bell className="text-gray-300 dark:text-gray-600" size={24} />
      </div>

      <div className="absolute top-4 right-4 z-10">
        <input
          value={acc.badge}
          onChange={(e) => onChange(acc.id, 'badge', e.target.value)}
          className={`text-[11px] font-bold px-2 py-0.5 rounded text-center outline-none w-[65px] uppercase shadow-sm tracking-wide ${
            isDemo ? 'bg-[#34c759] text-white' : 'bg-[#ff9500] text-white'
          }`}
          title="Edit badge text"
        />
      </div>

      <div
        onClick={cycleColor}
        className="w-14 h-14 flex items-center justify-center mb-4 shadow-sm cursor-pointer rounded-[4px] transition-colors overflow-hidden"
        style={{ backgroundColor: acc.logoBg }}
        title="Click to change color"
      >
        <input
          value={acc.logoText}
          onChange={(e) => onChange(acc.id, 'logoText', e.target.value)}
          className="bg-transparent text-center w-full outline-none text-black font-extrabold text-[12px] placeholder-black/50"
          placeholder="logo"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <input
        value={acc.name}
        onChange={(e) => onChange(acc.id, 'name', e.target.value)}
        className="text-[15px] font-bold text-center text-black dark:text-white px-2 bg-transparent w-full outline-none"
        placeholder="ACCOUNT NAME"
      />

      <input
        value={acc.broker}
        onChange={(e) => onChange(acc.id, 'broker', e.target.value)}
        className="text-[13px] text-[#007aff] mt-1 text-center bg-transparent w-full outline-none"
        placeholder="Broker Name"
      />

      <input
        value={acc.details}
        onChange={(e) => onChange(acc.id, 'details', e.target.value)}
        className="text-[13px] text-gray-400 mt-4 tracking-tight text-center bg-transparent w-full outline-none"
        placeholder="Account Details"
      />

      <input
        value={acc.access}
        onChange={(e) => onChange(acc.id, 'access', e.target.value)}
        className="text-[13px] text-gray-500 mt-0.5 text-center bg-transparent w-full outline-none"
        placeholder="Access point"
      />

      <div className="flex items-center justify-center mt-4 mb-2 max-w-full">
        <input
          value={acc.balance}
          onChange={(e) => onChange(acc.id, 'balance', e.target.value)}
          className="text-[30px] font-bold text-black dark:text-white tracking-tight text-right bg-transparent outline-none min-w-[20px]"
          style={{ width: `${Math.max(acc.balance.length, 1)}ch` }}
        />
        <span className="text-[30px] font-bold text-black dark:text-white mx-1">&nbsp;</span>
        <input
          value={acc.currency}
          onChange={(e) => onChange(acc.id, 'currency', e.target.value)}
          className="text-[30px] font-bold text-black dark:text-white tracking-tight bg-transparent outline-none w-[70px]"
        />
      </div>
    </div>
  )
}

const AccountsView = ({ openDrawer, accounts, onAddAccount, onUpdateAccount }) => (
  <div className="flex flex-col h-full bg-white dark:bg-black animate-in slide-in-from-right-2 duration-200">
    <div className="flex items-center justify-between px-2 py-1 shadow-sm dark:border-b dark:border-gray-900 bg-white dark:bg-black z-10 shrink-0">
      <div className="flex items-center">
        <HeaderIcon Icon={Menu} onClick={openDrawer} />
        <h1 className="text-[19px] font-semibold ml-2 text-black dark:text-white">Accounts</h1>
      </div>
      <div className="flex items-center">
        <HeaderIcon Icon={Award} />
        <HeaderIcon Icon={Plus} onClick={onAddAccount} />
        <HeaderIcon Icon={MoreVertical} />
      </div>
    </div>

    <div className="flex-1 p-4 bg-white dark:bg-black overflow-y-auto pb-24">
      {accounts.map((acc) => (
        <EditableAccountCard key={acc.id} acc={acc} onChange={onUpdateAccount} />
      ))}
    </div>
  </div>
)

const AddQuoteView = ({ onBack, availableQuotes, onAddQuote }) => {
  const [search, setSearch] = useState('')

  const filteredQuotes = availableQuotes.filter((q) => q.sym.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="flex flex-col h-full bg-white dark:bg-black animate-in slide-in-from-right-4 duration-200">
      <div className="flex items-center px-2 py-1 shadow-sm dark:border-b dark:border-gray-900 bg-white dark:bg-black z-10">
        <HeaderIcon Icon={ArrowLeft} onClick={onBack} />
        <div className="flex items-center bg-gray-100 dark:bg-[#1c1c1e] rounded-lg px-3 py-1.5 ml-2 flex-1">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Find symbol"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-[15px] text-gray-900 dark:text-gray-100 placeholder-gray-400"
            autoFocus
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-white dark:bg-black pb-4">
        <div className="px-4 py-3 bg-gray-50 dark:bg-[#111] border-b border-gray-100 dark:border-gray-900">
          <span className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider">Available Symbols</span>
        </div>

        {filteredQuotes.length > 0 ? (
          filteredQuotes.map((q) => (
            <div
              key={q.sym}
              className="flex items-center justify-between py-3 px-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#111] cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="text-[16px] font-bold text-black dark:text-white tracking-tight">{q.sym}</span>
                <span className="text-[12px] text-gray-500 mt-0.5">Forex / Crypto / Commodities</span>
              </div>
              <button
                onClick={() => onAddQuote(q)}
                className="w-8 h-8 rounded-full bg-[#007aff]/10 dark:bg-[#007aff]/20 flex items-center justify-center text-[#007aff] hover:bg-[#007aff] hover:text-white transition-colors focus:outline-none"
              >
                <Plus size={18} strokeWidth={2.5} />
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center mt-12 text-center px-6 text-gray-500">
            <Search size={40} className="mb-4 opacity-20" />
            <p className="text-[15px] font-medium">No symbols found</p>
          </div>
        )}
      </div>
    </div>
  )
}

const SideDrawer = ({ isOpen, onClose, onNavigate, activeAccount }) => {
  const menuItems = [
    { icon: TrendingUp, label: 'Trade', id: 'trade' },
    { icon: Newspaper, label: 'News', id: 'news' },
    { icon: Mail, label: 'Mailbox', id: 'mailbox', badge: '36', badgeColor: 'bg-[#ff3b30]' },
    { icon: BookOpen, label: 'Journal', id: 'journal' },
    { icon: Settings, label: 'Settings', id: 'settings' },
    { icon: Calendar, label: 'Economic calendar', id: 'calendar', badge: 'Ads', badgeColor: 'bg-[#007aff]' },
    { icon: Users, label: 'Traders Community', id: 'community' },
    { icon: Send, label: 'MQL5 Algo Trading', id: 'algo' },
    { icon: HelpCircle, label: 'User guide', id: 'guide' },
    { icon: Info, label: 'About', id: 'about' },
  ]

  return (
    <>
      {isOpen && <div className="absolute inset-0 bg-black/50 z-40 transition-opacity duration-300" onClick={onClose} />}

      <div
        className={`absolute top-0 left-0 h-full w-[82%] sm:w-[320px] bg-white dark:bg-[#111] z-50 transition-transform duration-300 ease-in-out transform flex flex-col shadow-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-4 py-6 border-b border-gray-100 dark:border-gray-900 flex justify-between items-start">
          <div className="flex gap-3 mt-4 w-full">
            <div
              className="w-11 h-11 flex items-center justify-center text-black font-extrabold text-[10px] shrink-0 shadow-sm rounded-sm overflow-hidden"
              style={{ backgroundColor: activeAccount.logoBg }}
            >
              {activeAccount.logoText}
            </div>
            <div className="flex flex-col overflow-hidden w-[75%]">
              <span className="text-[14px] font-bold text-black dark:text-white truncate pr-2">{activeAccount.name}</span>
              <span className="text-[12px] text-gray-500 mt-0.5 truncate">{activeAccount.details}</span>
              <button
                onClick={() => onNavigate('accounts')}
                className="text-[#007aff] text-[14px] font-medium text-left mt-2 hover:underline focus:outline-none"
              >
                Manage accounts
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col py-2 overflow-y-auto pb-6">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (item.id === 'trade') onNavigate('trade')
                if (item.id === 'accounts') onNavigate('accounts')
                onClose()
              }}
              className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 dark:hover:bg-[#1c1c1e] active:bg-gray-100 dark:active:bg-gray-900 transition-colors focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <item.icon size={22} strokeWidth={2} className="text-gray-700 dark:text-gray-300" />
                <span className="text-[15px] font-bold text-black dark:text-white">{item.label}</span>
              </div>

              {item.badge && (
                <div className={`px-2 py-0.5 rounded-full text-white text-[10px] font-bold flex items-center justify-center ${item.badgeColor}`}>
                  {item.badge}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('quotes')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const [quotes, setQuotes] = useState(initialQuotesData)
  const [availableQuotes, setAvailableQuotes] = useState(availableNewQuotes)

  const [accounts, setAccounts] = useState([
    {
      id: 1,
      logoBg: '#ffea00',
      logoText: 'exness',
      name: 'EMAAR BANK DUBAI TRANSFER ACCOUNT',
      broker: 'Exness (KE) Limited',
      details: '133761350 — ExnessKE-MT5Real9',
      access: 'Access point',
      balance: '1.87',
      currency: 'USD',
      badge: 'Real',
    },
  ])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const handleNavigate = (target) => {
    setActiveTab(target)
    setIsDrawerOpen(false)
  }

  const handleAddAccount = () => {
    const newMockAccount = {
      id: Date.now(),
      logoBg: '#007aff',
      logoText: 'broker',
      name: 'NEW SIMULATION ACCOUNT',
      broker: 'Custom Broker Ltd.',
      details: '99999999 — Custom-Server',
      access: 'Access point',
      balance: '10000.00',
      currency: 'USD',
      badge: 'Demo',
    }
    setAccounts([newMockAccount, ...accounts])
  }

  const handleUpdateAccount = (id, field, value) => {
    setAccounts(accounts.map((acc) => (acc.id === id ? { ...acc, [field]: value } : acc)))
  }

  const handleAddQuote = (newQuote) => {
    setQuotes([newQuote, ...quotes])
    setAvailableQuotes(availableQuotes.filter((q) => q.sym !== newQuote.sym))
  }

  const handleRemoveQuote = (symToRemove) => {
    const quoteToRemove = quotes.find((q) => q.sym === symToRemove)
    if (quoteToRemove) {
      setQuotes(quotes.filter((q) => q.sym !== symToRemove))
      setAvailableQuotes([quoteToRemove, ...availableQuotes])
    }
  }

  const tabs = [
    { id: 'quotes', icon: ArrowUpDown, label: 'Quotes' },
    { id: 'charts', icon: BarChart2, label: 'Charts' },
    { id: 'trade', icon: TrendingUp, label: 'Trade' },
    { id: 'history', icon: Clock, label: 'History' },
    { id: 'messages', icon: MessageSquare, label: 'Messages', badge: 2 },
  ]

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-800 flex items-center justify-center`}>
      <div className="w-full max-w-md h-[850px] max-h-screen bg-gray-50 dark:bg-black relative overflow-hidden flex flex-col shadow-2xl sm:border sm:border-gray-300 dark:sm:border-gray-800 sm:rounded-[30px]">
        <div className="flex-1 overflow-hidden relative bg-white dark:bg-black">
          {activeTab === 'quotes' && (
            <QuotesView
              openDrawer={() => setIsDrawerOpen(true)}
              quotes={quotes}
              onAddClick={() => handleNavigate('add_quote')}
              onRemoveQuote={handleRemoveQuote}
            />
          )}
          {activeTab === 'charts' && <ChartsView openDrawer={() => setIsDrawerOpen(true)} />}
          {activeTab === 'trade' && <TradeView openDrawer={() => setIsDrawerOpen(true)} accounts={accounts} />}
          {activeTab === 'history' && <HistoryView openDrawer={() => setIsDrawerOpen(true)} />}
          {activeTab === 'messages' && <MessagesView openDrawer={() => setIsDrawerOpen(true)} />}

          {activeTab === 'accounts' && (
            <AccountsView
              openDrawer={() => setIsDrawerOpen(true)}
              accounts={accounts}
              onAddAccount={handleAddAccount}
              onUpdateAccount={handleUpdateAccount}
            />
          )}
          {activeTab === 'add_quote' && (
            <AddQuoteView
              onBack={() => handleNavigate('quotes')}
              availableQuotes={availableQuotes}
              onAddQuote={handleAddQuote}
            />
          )}
        </div>

        <SideDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onNavigate={handleNavigate}
          activeAccount={accounts[0]}
        />

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="absolute top-12 right-4 p-2.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow z-30 hover:opacity-80 transition-opacity focus:outline-none"
          title="Toggle Theme"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div
          className={`h-[75px] bg-white dark:bg-[#111] border-t border-gray-100 dark:border-gray-900 flex justify-around items-start pt-2 px-2 shrink-0 z-10 absolute bottom-0 w-full pb-4 transition-transform duration-300 ${
            activeTab === 'accounts' || activeTab === 'add_quote' ? 'translate-y-full' : ''
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center w-16 relative focus:outline-none ${
                activeTab === tab.id ? 'text-[#007aff]' : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <div className="mb-1 transition-transform">
                <tab.icon size={26} strokeWidth={activeTab === tab.id ? 2.5 : 1.5} />
              </div>
              <span className="text-[10px] font-semibold">{tab.label}</span>

              {tab.badge && (
                <span className="absolute top-0 right-3 w-[16px] h-[16px] bg-[#ff3b30] text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-[#111]">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
