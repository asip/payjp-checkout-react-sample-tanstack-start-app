import PayjpCheckout from '@/components/class/payjp-checkout'
import type { PayjpCheckoutErrorPayload, PayjpCheckoutPayload } from '@/components/class/payjp-checkout'

import { createFileRoute, Link } from '@tanstack/react-router'


export const Route = createFileRoute('/class')({ component: Class })

function Class() {
  const key = import.meta.env.VITE_PAYJP_PUBLIC_KEY

  const payjpCheckoutProps = {
    dataKey: key,
    dataText: 'クレジットカードで支払う',
    dataPartial: 'true',
    onCreatedHandler: onCreated,
    onFailedHandler: onFailed,
  }

  function onCreated(payload: PayjpCheckoutPayload) {
    //console.log(payload)
    console.log(payload.token)
  }

  function onFailed(payload: PayjpCheckoutErrorPayload) {
    console.log(payload.message)
  }

  return (
    <div className="payjpButtonArea">
      <div>class component</div>
      <PayjpCheckout {...payjpCheckoutProps} />
      <div><Link to="/" className="underline">function component</Link></div>
      {/* <div><a href="/" class="underline">function component</a></div> */}
    </div>
  )
}
