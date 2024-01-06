export interface Todo {
  /**
   * Todo ID
   */
  id: string;

  /**
   * Flag to check if Todo is marked as important
   */
  important: boolean;

  /**
   * Todo description
   */
  description: string;

  /**
   * ISO DateTime string of Todo completion.
   */
  completedAt?: string | null;
}