import { defineStore } from 'pinia';
import type { showedModal } from './model/commonModel';
import { isEmpty } from 'lodash-es';

interface CommonState {
  showedModals: showedModal[];
}

export const useCommonStore = defineStore({
  id: 'common-store',
  state: (): CommonState => ({
    showedModals: []
  }),
  getters: {
    getShowedModals(): showedModal[] {
      return this.showedModals;
    },
    getTest(): showedModal | undefined {
      return this.showedModals.find((modal) => modal.modalId === 'test');
    },
    /**
     * Is empty showedModals
     */
    isEmptyShowedModals(): boolean {
      return isEmpty(this.showedModals);
    }
  },
  actions: {
    /**
     * Push showedModal
     * @param modal showedModal
     */
    pushShowedModal(modal: showedModal) {
      console.log('pushShowedModal', modal);
      this.showedModals.push(modal);
    },
    /**
     * Pop showedModal
     */
    popShowedModal() {
      if (this.showedModals.length === 0) {
        return;
      }
      return this.showedModals.pop();
    },
    peekShowedModal() {
      return this.showedModals[this.showedModals.length - 1];
    },
    /**
     * Remove showedModal
     * @param modalId modalId
     */
    removeShowedModal(modalId: string) {
      this.showedModals = this.showedModals.filter((modal) => modal.modalId !== modalId);
    }
  }
});
