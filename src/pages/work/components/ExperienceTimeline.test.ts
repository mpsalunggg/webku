import { describe, expect, it } from 'vitest'
import { groupExperiences } from './ExperienceTimeline'
import { workExperiences } from '@/constants/work'

describe('groupExperiences', () => {
    const groups = groupExperiences(workExperiences)

    it('collapses repeated companies into one entry', () => {
        expect(workExperiences).toHaveLength(6)
        expect(groups).toHaveLength(4)
    })

    it('places each company at its newest role, merging non-adjacent repeats', () => {
        // Educourse.id (06/2024 + 02/2023) merges above Rey.id (09/2023).
        expect(groups.map((g) => g.company)).toEqual([
            'Tan Digital',
            'Amerta Digital Wijaya',
            'Educourse.id',
            'Rey.id',
        ])
    })

    it('orders roles within a group newest first', () => {
        const educourse = groups.find((g) => g.company === 'Educourse.id')!
        expect(educourse.roles.map((r) => r.period)).toEqual([
            '06/2024 - 09/2024',
            '02/2023 - 06/2023',
        ])
    })
})
