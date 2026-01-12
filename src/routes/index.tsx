import PayjpCheckout from '@/components/func/payjp-checkout'

import { createFileRoute, Link } from '@tanstack/react-router'


export const Route = createFileRoute('/')({ component: App })

function App() {
  const key = import.meta.env.VITE_PAYJP_PUBLIC_KEY

  const payjpCheckoutProps = {
    dataKey: key,
    dataText: 'クレジットカードで支払う',
    dataPartial: 'true',
    onCreatedHandler: onCreated,
    onFailedHandler: onFailed,
  }

  function onCreated(payload: any) {
    //console.log(payload)
    console.log(payload.token)
  }

  function onFailed(payload: any) {
    console.log(payload.message)
  }

  return (
    <div className="payjpButtonArea">
      <div>function component</div>
      <div><Link to="/class" className="underline">class component</Link></div>
      {/* <div><a href="/">class component</a></div> */}
      <PayjpCheckout {...payjpCheckoutProps} />
    </div>
  )
}
