type TNext = (action: IAction) => void

interface IAction {
  type: string
  payalod?: Record<string, unknown>
  meta?: Record<string, unknown>
}

const middleware = () => (next: TNext) => (action: IAction): void => {
  console.log('ACTION: ' + action.type, action)
  next(action)
}

export default middleware
