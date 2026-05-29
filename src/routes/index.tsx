import PayjpCheckout from '@/components/func/payjp-checkout'
import type { PayjpCheckoutErrorPayload, PayjpCheckoutPayload } from '@/types'

import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({ component: Func })

function Func() {
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
      <div>function component</div>
      <PayjpCheckout {...payjpCheckoutProps} />
      {/* <div><Link to="/class" className="underline">class component</Link></div> */}
      {/* <div><a href="/class" class="underline">class component</a></div> */}
    </div>
  )
}
