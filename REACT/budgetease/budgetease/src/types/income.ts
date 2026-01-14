export interface IncomeItem {
id: string
title: string
amount: number
sourceType?: 'stipend' | 'apprenticeship' | 'other'
receivedOn?: string // ISO date
}