import { AskAnExpertState, getInitialState } from './store';
import { AvailablePoliciesResponse } from '@/webservices/models/askAnExpert/AvailablePoliciesResponse';

export const emptyState: AskAnExpertState = getInitialState();

export const getAvailablePoliciesResponse: AvailablePoliciesResponse = {
    policies: [
        {
            key: 'p000',
            value: 'Policy 000',
        },
    ],
};
