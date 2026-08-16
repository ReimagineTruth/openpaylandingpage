export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string
          slug: string
          title: string
          display_date: string
          author: string
          category: string
          summary: string
          meta: string
          tags: string[]
          hero: string
          content: string
          cta_text: string
          cta_link: string
          published: boolean
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          display_date: string
          author?: string
          category: string
          summary?: string
          meta?: string
          tags?: string[]
          hero?: string
          content?: string
          cta_text?: string
          cta_link?: string
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          display_date?: string
          author?: string
          category?: string
          summary?: string
          meta?: string
          tags?: string[]
          hero?: string
          content?: string
          cta_text?: string
          cta_link?: string
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      site_content: {
        Row: {
          id: number
          page: string
          section: string
          content: Json
          updated_at: string
        }
        Insert: {
          id?: number
          page: string
          section: string
          content?: Json
          updated_at?: string
        }
        Update: {
          id?: number
          page?: string
          section?: string
          content?: Json
          updated_at?: string
        }
        Relationships: []
      }
      staff_profiles: {
        Row: {
          id: string
          email: string
          role: "admin" | "support" | "auditor"
          is_active: boolean
          last_active_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          role?: "admin" | "support" | "auditor"
          is_active?: boolean
          last_active_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: "admin" | "support" | "auditor"
          is_active?: boolean
          last_active_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      wallet_accounts: {
        Row: {
          id: string
          username: string
          account_no: string
          email: string
          display_name: string
          status: "active" | "restricted" | "frozen" | "suspended"
          risk: "low" | "medium" | "high"
          ousd_balance: number
          pi_balance: number
          flags: string[]
          restriction_reason: string | null
          last_active_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          username: string
          account_no: string
          email: string
          display_name: string
          status?: "active" | "restricted" | "frozen" | "suspended"
          risk?: "low" | "medium" | "high"
          ousd_balance?: number
          pi_balance?: number
          flags?: string[]
          restriction_reason?: string | null
          last_active_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          account_no?: string
          email?: string
          display_name?: string
          status?: "active" | "restricted" | "frozen" | "suspended"
          risk?: "low" | "medium" | "high"
          ousd_balance?: number
          pi_balance?: number
          flags?: string[]
          restriction_reason?: string | null
          last_active_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      kyc_profiles: {
        Row: {
          account_id: string
          status: "approved" | "pending" | "rejected" | "expired"
          full_name: string
          dob: string | null
          nationality: string | null
          id_type: string | null
          id_number_masked: string | null
          address: string | null
          verified_at: string | null
          notes: string | null
          updated_at: string
        }
        Insert: {
          account_id: string
          status?: "approved" | "pending" | "rejected" | "expired"
          full_name: string
          dob?: string | null
          nationality?: string | null
          id_type?: string | null
          id_number_masked?: string | null
          address?: string | null
          verified_at?: string | null
          notes?: string | null
          updated_at?: string
        }
        Update: {
          account_id?: string
          status?: "approved" | "pending" | "rejected" | "expired"
          full_name?: string
          dob?: string | null
          nationality?: string | null
          id_type?: string | null
          id_number_masked?: string | null
          address?: string | null
          verified_at?: string | null
          notes?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "kyc_profiles_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: true
            referencedRelation: "wallet_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      wallet_transactions: {
        Row: {
          id: number
          account_id: string
          occurred_at: string
          tx_type: string
          method: string
          counterparty: string
          amount: number
          status: string
          note: string | null
        }
        Insert: {
          id?: number
          account_id: string
          occurred_at?: string
          tx_type: string
          method: string
          counterparty?: string
          amount: number
          status?: string
          note?: string | null
        }
        Update: {
          id?: number
          account_id?: string
          occurred_at?: string
          tx_type?: string
          method?: string
          counterparty?: string
          amount?: number
          status?: string
          note?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wallet_transactions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "wallet_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      wallet_ledger: {
        Row: {
          id: number
          account_id: string
          direction: "credit" | "debit"
          amount: number
          reason: string
          actor_email: string | null
          created_at: string
        }
        Insert: {
          id?: number
          account_id: string
          direction: "credit" | "debit"
          amount: number
          reason: string
          actor_email?: string | null
          created_at?: string
        }
        Update: {
          id?: number
          account_id?: string
          direction?: "credit" | "debit"
          amount?: number
          reason?: string
          actor_email?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "wallet_ledger_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "wallet_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      account_actions: {
        Row: {
          id: number
          account_id: string
          action: "restrict" | "freeze" | "suspend" | "restore" | "flag" | "note"
          reason: string | null
          detail: string
          actor_email: string | null
          created_at: string
        }
        Insert: {
          id?: number
          account_id: string
          action: "restrict" | "freeze" | "suspend" | "restore" | "flag" | "note"
          reason?: string | null
          detail?: string
          actor_email?: string | null
          created_at?: string
        }
        Update: {
          id?: number
          account_id?: string
          action?: "restrict" | "freeze" | "suspend" | "restore" | "flag" | "note"
          reason?: string | null
          detail?: string
          actor_email?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "account_actions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "wallet_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_audit_log: {
        Row: {
          id: number
          area: string
          detail: string
          actor_email: string | null
          created_at: string
        }
        Insert: {
          id?: number
          area: string
          detail: string
          actor_email?: string | null
          created_at?: string
        }
        Update: {
          id?: number
          area?: string
          detail?: string
          actor_email?: string | null
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      search_wallet_accounts: {
        Args: { p_query: string }
        Returns: Database["public"]["Tables"]["wallet_accounts"]["Row"][]
      }
      adjust_wallet_balance: {
        Args: {
          p_account_id: string
          p_direction: "credit" | "debit"
          p_amount: number
          p_reason: string
        }
        Returns: Database["public"]["Tables"]["wallet_accounts"]["Row"]
      }
      set_wallet_account_status: {
        Args: {
          p_account_id: string
          p_status: "active" | "restricted" | "frozen" | "suspended"
          p_reason?: string
          p_detail?: string
        }
        Returns: Database["public"]["Tables"]["wallet_accounts"]["Row"]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
