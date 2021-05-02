// const middleware = ({ getState, dispatch }) => (next) => (action) => {}

const throttled: Record<string, unknown> = {}

type TNext = (action: IAction) => void

interface IAction {
  type: string
  payalod?: Record<string, unknown>
  meta?: Record<string, unknown>
}

const middleware = () => (next: TNext) => (action: IAction): void => {
  const time = action.meta && action.meta.throttle

  if (!time) {
    return next(action)
  }

  // ignore if already
  if (throttled[action.type]) {
    return
  }

  throttled[action.type] = true

  setTimeout(() => {
    throttled[action.type] = false
  }, time as number)
  return next(action)
}

export default middleware
