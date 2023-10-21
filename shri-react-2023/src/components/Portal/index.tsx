import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  selectorId: string;
  portalStyles: React.CSSProperties;
}

interface PopupPortal {
  children: React.ReactNode
}

const POPUP_ID = 'portal-popups';

function Portal({ children, selectorId, portalStyles }: PortalProps) {
  const portalContainer = document.getElementById(selectorId);
  if (!portalContainer)
    return createPortal(
      <div id={selectorId} style={portalStyles}>
        {children}
      </div>,
      document.body
    );
  return createPortal(children, portalContainer);
}

export default function PopupPortal ({children}: PopupPortal) {
  return <Portal selectorId={POPUP_ID} portalStyles={{ zIndex: 2, position: 'fixed', top: 0, left: 0 }}>{children}</Portal> 
}