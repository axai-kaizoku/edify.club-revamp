"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Tabs Component
 * Can be used as both a controlled and uncontrolled component.
 *
 * Controlled: Use `value` and `onValueChange` props.
 * Uncontrolled: Use `defaultValue`.
 */
type TabsProps = {
  className?: string
  /** The active tab value (for controlled mode) */
  value?: string
  /** The default active tab value (for uncontrolled mode) */
  defaultValue?: string
  /** Callback when the tab value changes */
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

type TabsListProps = {
  className?: string
  activeTab?: string
  setActiveTab?: (value: string) => void
  children: React.ReactNode
}

type TabsTriggerProps = {
  className?: string
  value: string
  activeTab?: string
  setActiveTab?: (value: string) => void
  children: React.ReactNode
}

type TabsContentProps = {
  className?: string
  value: string
  activeTab?: string
  children: React.ReactNode
}

// Tabs Component
const Tabs = ({
  children,
  className,
  value,
  defaultValue,
  onValueChange,
}: TabsProps) => {
  const isControlled = value !== undefined
  const [internalActiveTab, setInternalActiveTab] = React.useState<string>(
    defaultValue ?? ""
  )
  const activeTab = isControlled ? value : internalActiveTab
  const setActiveTab = (newValue: string) => {
    if (!isControlled) setInternalActiveTab(newValue)
    onValueChange?.(newValue)
  }

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === TabsList) {
            return React.cloneElement(
              child as React.ReactElement<TabsListProps>,
              { activeTab, setActiveTab }
            )
          }
          if (child.type === TabsContent) {
            return React.cloneElement(
              child as React.ReactElement<TabsContentProps>,
              { activeTab }
            )
          }
        }
        return child
      })}
    </div>
  )
}

// TabsList Component
const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, activeTab, setActiveTab, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg bg-muted p-0.5 text-muted-foreground/70",
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type === TabsTrigger) {
              return React.cloneElement(
                child as React.ReactElement<TabsTriggerProps>,
                { activeTab, setActiveTab }
              )
            }
          }
          return child
        })}
      </div>
    )
  }
)
TabsList.displayName = "TabsList"

// TabsTrigger Component
const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, activeTab, setActiveTab, children, ...props }, ref) => {
    const isActive = activeTab === value

    return (
      <button
        ref={ref}
        role="tab"
        aria-selected={isActive}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium outline-offset-2 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50",
          isActive && "bg-background text-foreground shadow-sm shadow-black/5",
          !isActive && "hover:text-muted-foreground",
          className
        )}
        onClick={() => setActiveTab?.(value)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

// TabsContent Component
const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, activeTab, children, ...props }, ref) => {
    const isActive = activeTab === value

    return (
      <div
        ref={ref}
        role="tabpanel"
        className={cn(
          "mt-2 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70",
          className
        )}
        hidden={!isActive}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TabsContent.displayName = "TabsContent"

export { Tabs, TabsContent, TabsList, TabsTrigger }
